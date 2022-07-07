import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { addDob } from '../../store/dobSlicer/dobSlicer'

export default function useAdd() {

  const [fullName, setFullName] = useState()
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
 

  const dispatch= useDispatch()
  const navigation= useNavigation()

  const data= useSelector(store => store.dobSlicer.data)
  
  
  

  const addDobHandler = () => {
    if(!fullName || !day || !month || !year){
      alert("All fields required")
      return
    }
    if(!data[0]?.docId || ""){
    const dobData = {
      name: fullName,
      day,
      month,
      year
    }
    dispatch(addDob(dobData))
    setFullName("")
    setDay("")
    setMonth("")
    setYear("")
  }else{
    alert("Data Already Added, update it from Edit Screen")
  }
  }


  return (
    { fullName, setFullName, day, setDay, month, setMonth, year, setYear, addDobHandler}
  )
}

