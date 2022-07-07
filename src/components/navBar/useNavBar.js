import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'



export default function useNavBar() {
    const navigation= useNavigation()

    const navigateToAdd=() =>{
        navigation.navigate("add")
    }
    const navigateToHome=() =>{
        navigation.navigate("home")
    }
    const navigateToEdit=() =>{
        navigation.navigate("edit")
    }
  return (
    {navigateToAdd, navigateToHome, navigateToEdit}
  )
}