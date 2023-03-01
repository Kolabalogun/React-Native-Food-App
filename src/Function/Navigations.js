import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Checkout from "../Screens/Checkout";
import MapOrderDelivery from "../Screens/MapOrderDelivery";
import Restaurant from "../Screens/Restaurant";
import TabNavigations from "./TabNavigations";
import Success from "../Screens/Success";

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Tabs" component={TabNavigations} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="MapOrderDelivery" component={MapOrderDelivery} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

export default Navigations;
