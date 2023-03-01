import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, StatusBar } from "react-native";

import { AppProvider } from "./src/Function/Context";
import Navigations from "./src/Function/Navigations";

export default function App() {
  return (
    <NavigationContainer style={styles.container} className="  flex-1">
      <AppProvider>
        <Navigations />
        <StatusBar style="auto" />
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
  },
});
