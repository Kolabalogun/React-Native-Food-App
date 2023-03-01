import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AdsBoard = () => {
  return (
    <View>
      <View className="flex-row justify-between my-3 bg-[#02aa14]  p-4 rounded-md">
        <View className="w-[70%]">
          <Text className="text-white font-medium text-[16px]">
            Hi, Ibrahim!
          </Text>
          <Text className="text-white my-1.5">
            Welcome, you have 20% discount on all our product from now till next
            August.
          </Text>
          <TouchableOpacity className="rounded-md bg-white w-[120px]">
            <Text className="text-green-600 p-1.5 text-center font-semibold">
              Order Food Now
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../../assets/burger.png")}
            resizeMode="cover"
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
    </View>
  );
};

export default AdsBoard;
