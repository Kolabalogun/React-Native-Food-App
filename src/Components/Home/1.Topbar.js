import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Topbar = ({ navigation }) => {
  const { toggleCart } = useGlobalContext();

  return (
    <View>
      <View style={styles.TopBar}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/premium/png-64-thumb/menu-1851509-1569408.png",
            }}
            resizeMode="contain"
            style={{ height: 20, width: 25 }}
          />
        </TouchableOpacity>
        <View style={styles.location}>
          <Text style={styles.locationTxt}>Tasty Food</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-64/bag-2456670-2036124.png",
            }}
            resizeMode="contain"
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
  },
  location: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  locationTxt: {
    fontSize: 18,
    // backgroundColor: "white",
    width: "70%",
    padding: 7,
    textAlign: "center",

    borderRadius: 15,
    fontWeight: "600",
  },
});
