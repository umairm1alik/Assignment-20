import { View, Text } from 'react-native'
import React from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';

import { styles } from './HomeStyle'
import NavBar from '../../components/navBar/NavBar'
import useHome from './useHome'




export default function Home() {
  const { data, seconds, minutes, hours, days, isItBday } = useHome()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.birthdayView}>
          <Text style={styles.homeText}>{data[0]?.name}'s</Text>
          <Text style={styles.homeText}>Birthday!</Text>
          <Text style={styles.birthdate}>{`${data[0]?.month}/${data[0]?.day}/${data[0]?.year}`}</Text>
        </View>
        <View style={styles.countdownWrapper}>
          <View style={styles.countdownBox}>
            {days < 10 ?
            <Text style={styles.countdownBoxText}>0{days}</Text>
            :
            <Text style={styles.countdownBoxText}>{days}</Text>
            }
            <Text style={styles.countdownBoxText}>Days</Text>
          </View>
          <View style={styles.countdownBox}>
            {hours < 10 ? 
            <Text style={styles.countdownBoxText}>0{hours}</Text>
            :
            <Text style={styles.countdownBoxText}>{hours}</Text>
            }
            <Text style={styles.countdownBoxText}>Hours</Text>
          </View>
          <View style={styles.countdownBox}>
            {minutes < 10 ?
            <Text style={styles.countdownBoxText}>0{minutes}</Text>
            :
            <Text style={styles.countdownBoxText}>{minutes}</Text>
            }
            <Text style={styles.countdownBoxText}>Minutes</Text>
          </View>
          <View style={styles.countdownBox}>
            {seconds < 10 ? 
            <Text style={styles.countdownBoxText}>0{seconds}</Text>
            :
            <Text style={styles.countdownBoxText}>{seconds}</Text>
            }
            
            <Text style={styles.countdownBoxText}>Seconds</Text>
          </View>
        </View>
        {isItBday ?
          <View style={styles.wishBox}>
          <ConfettiCannon count={1000} origin={{x: 0, y: 0}} autoStartDelay={0}/>
          <Text style={styles.wishText}>Happy Birthday {data[0]?.name}</Text>
          </View>
         :
         <Text></Text>
        }
      </View>
      <View style={{ marginBottom: 15 }}>
        <NavBar />
      </View>
    </View>
  )
}