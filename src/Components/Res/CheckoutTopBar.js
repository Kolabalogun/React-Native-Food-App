import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../Function/Context";

const CheckoutTopbar = ({ navigation }) => {
  const { toggleCart, showCart } = useGlobalContext();

  return (
    <View style={styles.TopBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://cdn.iconscout.com/icon/premium/png-128-thumb/go-back-arrow-5763885-4827407.png",
          }}
          resizeMode="contain"
          style={{ height: 20, width: 25 }}
        />
      </TouchableOpacity>
      <View style={styles.location}>
        <Text style={styles.locationTxt}>Checkout</Text>
      </View>
      <TouchableOpacity>
        {/* <Image
          source={require("../../../assets/icon/bag.png")}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
          }}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutTopbar;

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  location: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  locationTxt: {
    fontSize: 20,
    backgroundColor: "white",
    width: "70%",
    padding: 7,
    textAlign: "center",

    borderRadius: 15,
    fontWeight: "600",
  },
});
