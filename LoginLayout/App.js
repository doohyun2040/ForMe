import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/RegID";
import RegPassword from "./src/Screens/RegPassword";
import SplashScreen from "./src/Screens/SplashScreen";

const Stack = createStackNavigator();
/*
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
*/


const Auth =  () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShow: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShow: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShow: false}}
      />
      <Stack.Screen
        name="RegPassword"
        component={RegPassword}
        options={{headerShow: false}}
      />

    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds*/ }
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup*/ }
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
