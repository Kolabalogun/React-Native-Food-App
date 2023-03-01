import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Navbar = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center my-3">
      <TouchableOpacity>
        <Image
          source={require("../../../assets/menu.png")}
          resizeMode="contain"
          style={{ height: 20, width: 25 }}
        />
      </TouchableOpacity>

      <Text className="text-[18px] p-2 font-semibold">Tasty Food</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <Image
          source={require("../../../assets/bag.png")}
          resizeMode="contain"
          style={{ height: 25, width: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
