import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pref_1_time, Pref_2_diff, Pref_3_country, Pref_4_spicy, Pref_5_pref, PrefSel} from '../screens';
import Tab_landing from './Tab_landing';

const Stack = createStackNavigator();

const Stack_Pref = () => {
    return <Stack.Navigator 
        initialRouteName="시간" 
        screenOptions = {{ 
            cardStyle : {backgroundColor : "#ffffff"}, 
            headerTitleAlign : 'center',
            headerShown : false
            }} >
        <Stack.Screen name = "PrefSel" component = {PrefSel} />
        <Stack.Screen name = "time" component = {Pref_1_time} />
        <Stack.Screen name = "diff" component = {Pref_2_diff} />
        <Stack.Screen name = "country" component = {Pref_3_country} />
        <Stack.Screen name = "spicy" component = {Pref_4_spicy} />
        <Stack.Screen name = "pref" component = {Pref_5_pref} />
        <Stack.Screen name = "landing" component = {Tab_landing}/>
    </Stack.Navigator>
}

export default Stack_Pref;