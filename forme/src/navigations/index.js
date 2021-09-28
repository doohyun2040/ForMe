import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack_Pref from './Stack_Pref';
import Tab_landing from './Tab_landing';
import Login from './Login'

const LoginOrLanding = () => {
    const login = 1

    return (
        <NavigationContainer>
            {login? <Login/> : <Tab_landing/>}
        </NavigationContainer>
    )
}

const Navigation = () => {
    const main = 1

    return (
        <NavigationContainer>
            {main? <Login/> : <Tab_landing/>}
        </NavigationContainer>
    )
}

export default Navigation;