import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/RegID";
import RegPassword from "./src/Screens/RegPassword";
//import SplashScreen from "./src/Screens/SplashScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegPassword" component={RegPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}