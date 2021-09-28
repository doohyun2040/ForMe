import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { landing } from '../screens';

const Tab = createBottomTabNavigator();

const Tab_landing = () => {
    return (
        <Tab.Navigator initialRouteName = "Landing"
        screenOptions = {{ headerShown: false }} >
            <Tab.Screen name = "Landing" component = {landing}/>
            <Tab.Screen name = "Refre" component = {landing}/>
            <Tab.Screen name = "Community" component = {landing}/>
            <Tab.Screen name = "MyPage" component = {landing}/>
        </Tab.Navigator>
    )
}

export default Tab_landing;