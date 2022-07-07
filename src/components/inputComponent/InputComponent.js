import { View, TextInput } from 'react-native'
import React from 'react'

import { styles } from './InputComponentStyle'

export default function InputComponent(props) {
    return (
        <View style={{width: "100%"}}>
            <TextInput
                style={[styles.inputView, props.style]}
                placeholder={props.placeholder}
                placeholderTextColor="#00000099"
                onChangeText={props.onChangeText}
                value={props.value}
                keyboardType={props.keyboardType}
                autoCapitalize={props.autoCapitalize}
            />
        </View>
    )
}