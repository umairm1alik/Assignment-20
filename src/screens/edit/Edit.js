import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../add/AddStyle'
import useEdit from './useEdit'

import InputComponent from '../../components/inputComponent/InputComponent'
import ButtonComp from '../../components/buttonComp/ButtonComp'
import NavBar from '../../components/navBar/NavBar'


export default function Edit() {
    const { fullName, setFullName, day, setDay, month, setMonth, year, setYear, updateHandler } = useEdit()
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={{ marginVertical: 30, fontSize: 30, color: "#FFFFFF", fontWeight: "700" }}>Update DOB</Text>

                <InputComponent placeholder="Enter Your Name" onChangeText={setFullName} value={fullName} keyboardType="default" autoCapitalize="words" />

                <InputComponent style={styles.input} placeholder="Enter Your Day" onChangeText={setDay} value={day} keyboardType="numeric" autoCapitalize="none" />

                <InputComponent style={styles.input} placeholder="Enter Your Month" onChangeText={setMonth} value={month} keyboardType="numeric" autoCapitalize="none" />

                <InputComponent style={styles.input} placeholder="Enter Your Birth Year" onChangeText={setYear} value={year} keyboardType="numeric" autoCapitalize="none" />

                <ButtonComp title="UPDATE" onPress={updateHandler} />
            </View>
            <View style={{ marginBottom: 15 }}>
                <NavBar />
            </View>
        </View>
    )
}