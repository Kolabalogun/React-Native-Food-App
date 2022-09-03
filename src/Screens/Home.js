import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categoryData, FoodMenu, initialCurrentLocation } from "../Utils/Array";
import Topbar from "../Components/Home/1.Topbar";
import Intro from "../Components/Home/2.Intro";
import FoodCatTitle from "../Components/Home/3.FoodCat";
import { useGlobalContext } from "../Function/Context";
import Top from "../Components/Home/4.Top";

const Home = ({ navigation }) => {
  const { foodList, currentLocation, dummycategory } = useGlobalContext();

  return (
    <SafeAreaView style={styles.container}>
      {/* Food List  */}

      <View style={styles.foodShow}>
        <FlatList
          data={dummycategory}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Top}
          keyExtractor={(item) => `${item.menuId}`}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Restaurant", {
                  item,
                  currentLocation,
                });
              }}
              style={styles.foods}
            >
              <Image
                source={{
                  uri: item.item.photo,
                }}
                style={{ height: 200, borderRadius: 10 }}
                resizeMode="contain"
              />

              <View style={styles.foodStatus}>
                <Text style={styles.foodStatusTxt}>{item.item.status}</Text>
              </View>
              <View style={styles.foodTitle}>
                <Text style={styles.foodTitleTxt}>{item.item.name}</Text>
              </View>
              <View style={styles.foodDetails}>
                <Text style={styles.foodDetailsTxt}>4.8</Text>
                <Text style={styles.foodDetailsTxt}>Snacks</Text>
                <Text style={styles.foodDetailsTxt}>${item.item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Food List End  */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    height: "100%",

    backgroundColor: "aliceblue",
  },

  foods: {
    borderRadius: 10,
    marginVertical: 10,
  },
  foodStatus: {
    backgroundColor: " rgba(237, 253, 255, 0.62)",
    marginTop: -35,
    width: 110,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  foodStatusTxt: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  foodTitle: {
    // fontSize: 20,
  },
  foodTitleTxt: {
    fontSize: 20,
    paddingTop: 5,
    fontWeight: "500",
  },
  foodDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 140,
  },
  foodDetailsTxt: {
    fontSize: 17,
    paddingVertical: 0,
    fontWeight: "400",
  },
});
