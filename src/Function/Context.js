import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Text } from "react-native";
import { categoryData, FoodMenu, initialCurrentLocation } from "../Utils/Array";
import { Reducers } from "./Reducers";

const AppContext = React.createContext();

const initialState = {
  FoodArray: FoodMenu,
  foodList: FoodMenu,
  categories: categoryData,
  currentLocation: initialCurrentLocation,
  selectedCategory: null,
  dummycategory: FoodMenu,
  total: 0,
  navAmount: 0,
  currentFood: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  const [showCart, showCartF] = useState(false);

  function toggleCart(params) {
    showCartF(!showCart);
  }

  const handleSelectedCategory = (item) => {
    dispatch({ type: "SELECTEDCATEGORY", payload: item });
  };

  const increment = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const handleCheckOut = () => {
    dispatch({ type: "CHECKOUT" });
  };

  useEffect(() => {
    dispatch({ type: "GETTOTAL" });
  }, [state.foodList]);

  const navigation = useNavigation();
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSelectedCategory,
        increment,
        toggleCart,
        showCart,
        decrement,
        navigation,
        handleCheckOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
