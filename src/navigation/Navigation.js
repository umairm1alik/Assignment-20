import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();




// importing srceens
import Add from '../screens/add/Add';
import Home from '../screens/home/Home';
import Edit from '../screens/edit/Edit';

export default function Navigation() {
    
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
        >
            <Stack.Screen name='add' component={Add}/>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='edit' component={Edit}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}