import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Intro = () => {
  return (
    <View>
      <View style={styles.AdBoard}>
        <View style={styles.TxtBoard}>
          <Text style={styles.TxtBoardHeader}>Hi, Ibrahim!</Text>
          <Text style={styles.TxtBoardCaption}>
            Welcome, you have 20% discount on all our product from now till next
            August.
          </Text>
          <TouchableOpacity style={styles.TxtBoardBtn}>
            <Text style={styles.TxtBoardBtnText}>Order Food Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgBord}>
          {/* <Image
            source={require("../../assets/icon/a.png")}
            resizeMode="cover"
            style={{ height: 100, width: 100 }}
          /> */}
          <Image
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/burger-with-softy-4119393-3425154.png",
            }}
            resizeMode="cover"
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  AdBoard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "rgb(2, 170, 20)",
    padding: 15,
    borderRadius: 5,
  },
  TxtBoard: {
    width: "70%",
  },
  TxtBoardHeader: {
    color: "white",
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: 16,
  },

  TxtBoardCaption: {
    color: "white",
  },

  TxtBoardBtn: {
    backgroundColor: "white",
    width: 120,
    marginTop: 10,
    borderRadius: 5,
  },

  TxtBoardBtnText: {
    color: "green",
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: "center",
    fontWeight: "600",
  },
});
