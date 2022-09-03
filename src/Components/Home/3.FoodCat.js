import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useGlobalContext } from "../../Function/Context";

const FoodCatTitle = () => {
  const { categories, selectedCategory, handleSelectedCategory } =
    useGlobalContext();

  return (
    <>
      <View style={styles.foodCatHeaderTitle}>
        <Text style={styles.foodCatHeaderTitleTxt}>Food</Text>
        <Text style={styles.foodCatHeaderTitleTxt}>Categories</Text>
      </View>

      <View style={styles.foodList}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => handleSelectedCategory(item.item)}
              style={[
                styles.foodCat,
                {
                  backgroundColor:
                    selectedCategory === item.item
                      ? "rgb(2, 170, 20)"
                      : "white",
                },
              ]}
            >
              <Text
                style={[
                  [
                    styles.foodCatTxt,
                    {
                      color:
                        selectedCategory === item.item
                          ? "white"
                          : "rgb(2, 170, 20)",
                    },
                  ],
                ]}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default FoodCatTitle;

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
