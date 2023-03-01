import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../Function/Context";
import ButtonCard from "./ButtonCard";
import { ScrollView } from "react-native";

const FoodCategory = () => {
  const { categories } = useGlobalContext();

  return (
    <>
      <View>
        <Text className="text-[30px] font-bold leading-8">Food</Text>
        <Text className="text-[30px] font-bold leading-8">Categories</Text>
      </View>

      <View style={styles.foodList}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <ButtonCard category={category} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  foodCatHeaderTitleTxt: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 34,
  },
  foodCat: {
    marginVertical: 10,
    marginRight: 15,
    borderRadius: 5,
    borderColor: "rgb(2, 170, 20)",
    borderWidth: 1,
    alignItems: "center",
  },

  foodList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodCatTxt: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    padding: 7,
  },
});
