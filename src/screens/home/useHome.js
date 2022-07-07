import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useHome() {
  const [days, setDays] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isItBday, setIsItBday] = useState(false)

  
  const data = useSelector(store => store.dobSlicer.data)

  var birthDate = data[0]?.day
  var name = data[0]?.name
  var birthMonth = data[0]?.month

  // console.log(birthMonth);
  // console.log("date",birthDate);

  // if (name === undefined || birthDate === undefined || birthMonth === undefined) {
  //   // This is if not enough params are provided
  //   name = 'Umair'; // Name of the Person
  //   birthMonth = 6; // Month of the Birthday
  //   birthDate = 14; // Day of the Birthday
  // }

  
  const currentDate= new Date()
  
  const currentYear = currentDate.getFullYear();
  
  // console.log("current month", currentMonth)
  // console.log("current Day", currentDay)
  // console.log("Birth Month ", birthMonth);
  // console.log("Birth Date ", birthDate);

   const flag= currentDate.getMonth() == birthMonth-1 && currentDate.getDate() == birthDate

  useEffect(() => {
    
    setInterval(() => {
      const countdown = () => {
        const dateATM = new Date()
        let birthday = new Date(currentYear, birthMonth - 1, birthDate)
        if (dateATM > birthday) {
          birthday = new Date(currentYear + 1, birthMonth - 1, birthDate)
        } else {
          birthday = new Date(currentYear, birthMonth - 1, birthDate)
        }

        const currentTime = dateATM.getTime()
        const birthTime = birthday.getTime()
        const timeRemainig = birthTime - currentTime
        let seconds = Math.floor(timeRemainig/1000)
        let minutes = Math.floor(seconds/60)
        let hours = Math.floor(minutes/60)
        let days = Math.floor(hours/24)

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        

        // let remSeconds = Math.floor(timeRemainig/1000)
        // let remMinutes = Math.floor(remSeconds/60)
        // let remHours = Math.floor(remMinutes/60)
        // let remDays = Math.floor(remHours/24)

        // remSeconds %= 60;
        // remMinutes %= 60;
        // remHours %= 24;

        setSeconds(seconds)
        setMinutes(minutes)
        setHours(hours)
        setDays(days)
        
      }
      if (!flag) {
        countdown();
      } else {
        setIsItBday(true)
      }
    }, 1000)

    // console.log(isBirthday)
  }, [currentYear, birthMonth, birthDate, isItBday])
    
    // if(currentTime.getMonth() == birthMonth-1 && currentTime.getDay() == birthDate){
    //   setIsBirthday(true)
    // }




  // const currentDate = new Date()
  // const currentYear = currentDate.getFullYear()
  // let birthdate = new Date(currentYear, data[0]?.month - 1, data[0]?.day)
  // let birthMonth= birthdate.getMonth()
  // let birthday = birthdate.getDay()
  // console.log("birth month",birthMonth);
  // console.log("birthday", birthday);
  // if (currentDate > birthdate) {
  //   birthdate = new Date(currentYear + 1, data[0]?.month - 1, data[0]?.day)
  // }else {
  //   birthdate = new Date(currentYear, data[0]?.month - 1, data[0]?.day)
  // }
  // const currentTime = currentDate.getTime()
  // const birthTime = birthdate.getTime()
  // const timeRemainig = birthTime - currentTime
  // let seconds = Math.floor(timeRemainig / 1000)
  // let minutes = Math.floor(seconds / 60)
  // let hours = Math.floor(minutes / 60)
  // let days = Math.floor(hours / 24)
  // if(currentDate.getMonth() == birthMonth && currentDate.getDay() == birthday){
  //   var isBirthday=true
  //   seconds="00"
  //   days="00"
  //   minutes="00"
  //   hours="00"
  // }

  // seconds %= 60
  // minutes %= 60
  // hours %= 24

  // setInterval(seconds + 1, 1000)



  return (
    { data, seconds, minutes, hours, days, isItBday }
  )
}