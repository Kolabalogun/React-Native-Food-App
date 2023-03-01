import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";
import { useGlobalContext } from "../../Function/Context";

const FoodList = () => {
  const { dummycategory } = useGlobalContext();
  return (
    <>
      {dummycategory.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
