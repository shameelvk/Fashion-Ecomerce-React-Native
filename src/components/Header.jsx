import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appIconContainer}>
        <Image source={require('../assets/appicon.png')} style={styles.appIcon}/>
      </View>
      <Image source={require('../assets/dp.png')}  style={styles.dpImg}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIconContainer:{
        height:44,
        width:44,
        backgroundColor:"#fff",
        borderRadius:22,
        justifyContent:"center",
        alignItems:"center"
    },
    appIcon:{
        width:28,
        height:28
    },
    dpImg:{
        width:44,
        height:44,
        borderRadius:22
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})