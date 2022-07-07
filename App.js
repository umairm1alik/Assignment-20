import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './src/store/dobSlicer/dobSlicer'

export default function App() {
  const data= useSelector(store => store.dobSlicer.data)
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [data[0]?.docId || ""])
  
  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  )
}