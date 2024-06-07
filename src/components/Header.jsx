import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Entypo  from "react-native-vector-icons/Entypo";

const Header = ({isCart}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appIconContainer}>
       {isCart?<Entypo name="chevron-left" color="#E96E6E" size={27}/>: <Image source={require('../assets/appicon.png')} style={styles.appIcon}/>
      } 
       </View>
      {isCart&& <View>
        <Text style={styles.cartText}>My Cart</Text>
       </View>}
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
    },cartText:{
      fontSize:28,
      color:"#000000",
      fontWeight:"400"
    }
})