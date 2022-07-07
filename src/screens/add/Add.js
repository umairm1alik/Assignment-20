import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './AddStyle'

import useAdd from './useAdd'

import InputComponent from '../../components/inputComponent/InputComponent'
import ButtonComp from '../../components/buttonComp/ButtonComp'
import NavBar from '../../components/navBar/NavBar'





export default function Add() {
  const { fullName, setFullName, day, setDay, month, setMonth, year, setYear, addDobHandler, docId } = useAdd()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ marginVertical: 30, fontSize: 30, color: "#FFFFFF", fontWeight: "700" }}>Enter DOB</Text>

        <InputComponent placeholder="Enter Your Name" onChangeText={setFullName} value={fullName} keyboardType="default" autoCapitalize="words" />

        <InputComponent style={styles.input} placeholder="Enter Your Day" onChangeText={setDay} value={day} keyboardType="numeric" autoCapitalize="none" />

        <InputComponent style={styles.input} placeholder="Enter Your Month" onChangeText={setMonth} value={month} keyboardType="numeric" autoCapitalize="none" />

        <InputComponent style={styles.input} placeholder="Enter Your Birth Year" onChangeText={setYear} value={year} keyboardType="numeric" autoCapitalize="none" />
        
        <ButtonComp title="ADD" onPress={addDobHandler} />


        {/* <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'January', value: '1' },
                { label: 'February', value: '2' },
                { label: 'March', value: '3' },
                { label: 'April', value: '4' },
                { label: 'May', value: '5' },
                { label: 'June', value: '6' },
                { label: 'July', value: '7' },
                { label: 'August', value: '8' },
                { label: 'September', value: '9' },
                { label: 'October', value: '10' },
                { label: 'November', value: '11' },
                { label: 'December', value: '12' },
            ]}
        /> */}

      </View>
      <View style={{marginBottom: 15}}>
        <NavBar />
      </View>
    </View>
  )
}