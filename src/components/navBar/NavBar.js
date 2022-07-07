import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './NavBarStyle'
import useNavBar from './useNavBar'

export default function NavBar() {
    const {navigateToAdd, navigateToHome, navigateToEdit}= useNavBar()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navBarBtn} onPress={navigateToAdd}>
        <Text style={styles.navBarBtnText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarBtn} onPress={navigateToHome}>
        <Text style={styles.navBarBtnText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarBtn} onPress={navigateToEdit}>
        <Text style={styles.navBarBtnText}>Edit</Text>
      </TouchableOpacity>
    </View>
  )
}