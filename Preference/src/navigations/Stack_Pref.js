import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pref_1_time, Pref_2_diff, Pref_3_country, Pref_4_spicy, Pref_5_pref} from '../screens';

const Stack = createStackNavigator();

const Stack_Pref = () => {
    return <Stack.Navigator 
        initialRouteName="시간" 
        screenOptions = {{ 
            cardStyle : {backgroundColor : "#ffffff"}, 
            headerTitleAlign : 'center',
            }} >
        <Stack.Screen name = "time" component = {Pref_1_time} options = {{headerShown : false}} />
        <Stack.Screen name = "diff" component = {Pref_2_diff} options = {{headerShown : false}} />
        <Stack.Screen name = "country" component = {Pref_3_country} options = {{headerShown : false}} />
        <Stack.Screen name = "spicy" component = {Pref_4_spicy} options = {{headerShown : false}} />
        <Stack.Screen name = "pref" component = {Pref_5_pref} options = {{headerShown : false}} />
    </Stack.Navigator>
}

export default Stack_Pref;