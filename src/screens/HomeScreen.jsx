import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';



const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
    <Header/>
</LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }
})