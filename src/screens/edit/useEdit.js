import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateDob } from '../../store/dobSlicer/dobSlicer'

export default function useEdit() {

    const data= useSelector(store => store?.dobSlicer?.data || "" )
   
    const [day, setDay] = useState(data[0]?.day || "")
    const [fullName, setFullName] = useState(data[0]?.name || "")
    const [month, setMonth] = useState(data[0]?.month || "")
    const [year, setYear] = useState(data[0]?.year || "")

    const docId= data[0]?.docId || ""
    const dispatch= useDispatch()

    const updateHandler = () => {
      const updatedDob={
        name: fullName,
        day,
        month,
        year,
        docId
      }
      dispatch(updateDob(updatedDob))
    }

  return (
    {fullName, setFullName, day, setDay, month, setMonth, year, setYear, updateHandler}
  )
}