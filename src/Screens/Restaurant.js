import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import RestaurantTopbar from "../Components/Res/RestaurantTopBar";
import { useGlobalContext } from "../Function/Context";

const Restaurant = ({ navigation, route }) => {
  const { increment, currentFood, decrement, navAmount, total, showCart } =
    useGlobalContext();

  useEffect(() => {
    let { item, currentLocation } = route.params;
    itemF(item);
    currentLocationF(currentLocation);
  });

  const [count, countF] = useState(0);
  const [item, itemF] = useState(null);
  const [currentLocation, currentLocationF] = useState(null);
  const [constt, consttF] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2 }}>
        <ImageBackground
          source={{ uri: item?.item.photo }}
          style={{ height: "100%" }}
          resizeMode="cover"
        >
          <RestaurantTopbar navigation={navigation} />

          {showCart && <Cart />}
        </ImageBackground>
      </View>
      <View style={styles.foodBoard}>
        <View style={styles.line}></View>
        <View style={styles.NameandCount}>
          <View style={styles.name}>
            <Text style={styles.Foodname}>{item?.item.name}</Text>
            <Text style={styles.FoodDes}>{item?.item.description}</Text>
          </View>
          <View style={styles.count}>
            <TouchableOpacity
              style={styles.countBtn}
              onPress={() => {
                decrement(item?.item.menuId);
                if (constt > 0 || item?.item.value) {
                  consttF(count - 1);
                }
              }}
            >
              <Text style={styles.countBtnTxt}>-</Text>
            </TouchableOpacity>
            <View style={styles.countBtn}>
              <Text style={styles.countBtnTxt}>
                {constt ? currentFood : item?.item.value}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                increment(item?.item.menuId);

                consttF(count + 1);
              }}
              style={styles.countBtn}
            >
              <Text style={styles.countBtnTxt}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkout}>
          <View style={styles.cartDetail}>
            <Text style={styles.cartDetailTxt}>{navAmount} Items in Cart</Text>
            <Text style={styles.cartDetailTxt}>$ {total}</Text>
          </View>
          <View style={styles.cartDetail}>
            <Text style={styles.cartDetailTxt}>Tasty Food</Text>
            <Text style={styles.cartDetailTxt}>768494040</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Checkout", {
                item,
                currentLocation,
              });
            }}
            style={styles.checkoutBtn}
          >
            <Text style={styles.checkoutBtnTxt}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    height: "100%",

    backgroundColor: "aliceblue",
  },
  foodBoard: {
    // flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: -16,
    paddingBottom: 10,
  },
  line: {
    borderRadius: 5,
    borderColor: "green",

    borderWidth: 2,
    width: 90,

    alignSelf: "center",
    marginVertical: 10,
  },

  NameandCount: {
    flexDirection: "row",

    alignItems: "center",
  },

  name: {
    flex: 3,
    marginRight: 20,
  },
  Foodname: {
    fontSize: 30,
    fontWeight: "500",
  },

  count: {
    flexDirection: "row",
    backgroundColor: "green",
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  countBtn: {
    flexDirection: "row",
    backgroundColor: "green",
    paddingHorizontal: 5,
  },
  countBtnTxt: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  checkout: {
    marginTop: 35,
  },
  cartDetail: {
    borderTopWidth: 1,
    borderColor: "rgb(182, 192, 199)",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartDetailTxt: {
    fontSize: 16,
    fontWeight: "500",
  },
  checkoutBtn: {
    backgroundColor: "green",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  checkoutBtnTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    padding: 10,
  },
});
