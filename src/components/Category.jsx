import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectCategory, setselectCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setselectCategory(item)}>
      <Text style={[styles.categoryText,item==selectCategory&&{backgroundColor:'#E96E6E',color:'#FFFFFF'}]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        color:"#938F8F",
        backgroundColor:'#DFDCDC',
        paddingHorizontal:20,
        marginHorizontal:10,
        paddingVertical:10,
        borderRadius:16,
        fontSize:16,
        fontWeight:"600",
        


    }
})