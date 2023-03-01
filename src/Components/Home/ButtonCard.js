import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../Function/Context";

const ButtonCard = ({ category }) => {
  const { selectedCategory, handleSelectedCategory } = useGlobalContext();

  return (
    <TouchableOpacity
      onPress={() => handleSelectedCategory(category)}
      className={`my-2.5 mr-3.5 border-[1px] border-[#02aa14]  categorys-center rounded-md
      ${selectedCategory === category ? "bg-[#02aa14] " : "bg-white"}`}
    >
      <Text
        className={`p-2 font-bold text-[17px]
        ${selectedCategory === category ? "text-white " : " text-[#02aa14] "}`}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCard;

const styles = StyleSheet.create({});
