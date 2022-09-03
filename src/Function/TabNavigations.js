import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import Credits from "./Credit";

const Tabs = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "fast-food-sharp";
            (size = focused ? 28 : 20),
              (color = focused ? "rgb(6, 169, 21)" : "rgb(205, 205, 210)");
          } else if (route.name === "Credits") {
            iconName = "menu";
            (size = focused ? 28 : 25),
              (color = focused ? "rgb(6, 169, 21)" : "rgb(205, 205, 210)");
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor: "white",
          elevation: 0,
        },

        tabBarActiveBackgroundColor: "aliceblue",

        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Credits" component={Credits} />
    </Tabs.Navigator>
  );
};

export default TabNavigations;

const styles = StyleSheet.create({});
