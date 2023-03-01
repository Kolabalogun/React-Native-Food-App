import { SafeAreaView, ScrollView } from "react-native";
import React from "react";

import FoodList from "../Components/Home/FoodList";
import Navbar from "../Components/Home/Navbar";
import AdsBoard from "../Components/Home/AdsBoard";
import FoodCategory from "../Components/Home/FoodCategory";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className=" px-5 flex-1">
      <Navbar navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <AdsBoard />
        <FoodCategory />
        <FoodList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
