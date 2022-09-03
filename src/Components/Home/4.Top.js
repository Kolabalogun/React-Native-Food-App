import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topbar from "./1.Topbar";
import Intro from "./2.Intro";
import FoodCatTitle from "./3.FoodCat";

import { useGlobalContext } from "../../Function/Context";

const Top = () => {
  const { showCart, navigation } = useGlobalContext();

  return (
    <View>
      <Topbar navigation={navigation} />
      {showCart && <HomeCart />}

      <Intro />

      <FoodCatTitle />
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({});
