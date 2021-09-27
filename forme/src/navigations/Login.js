import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {Login_1,Login_2,Login_3,Login_4,Login_5,Splash} from "../screens"

const Stack = createStackNavigator();

const Auth =  () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Login_1} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login_3} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Login_4} options={{headerShown: false}} />
      <Stack.Screen name="RegPassword" component={Login_5} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const Login = () => {
  return (
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds*/ }
        <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}} />
        {/* Auth Navigator: Include Login and Signup*/ }
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
      </Stack.Navigator>
  );
};

export default Login;
