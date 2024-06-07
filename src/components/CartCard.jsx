import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartCard = ({item,handleDeleteCart}) => {
    
    
   return (
        <View style={styles.container}>
            <Image source={{ uri: item.image}} style={styles.cardImg} />
            <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>{item.title}</Text>
                    <Text style={styles.cardPrice} >${item.price}</Text>
                    <View style={styles.productVarient}>
                        <View style={[styles.coloCircle,{backgroundColor:item.color}]}></View>
                        <View style={styles.sizeContainer}>
                            <Text style={styles.sizeText}>{item.size}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{handleDeleteCart(item)}}>

                     <MaterialCommunityIcons name="delete" color="#F68CB5" size={30} />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,

    },
    cardImg: {
        height: 125,
        width: 95,
        borderRadius: 20
    },
    cardContent: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        padding: 10

    },
    cardText: {
        fontSize: 18,
        fontWeight: "500",
        color: '#444444'
    },
    cardPrice: {
        color: '#797979',
        fontSize: 18,
        fontWeight: "500",
        marginTop:10,
        
    },
    coloCircle:{
        width:32,
        height:32,
        backgroundColor:"#7094C1",
        borderRadius:16,
       marginRight:10
    },
    sizeText:{
        fontSize:18,
        fontWeight:"500",
        color:"#444444"
    },
    productVarient:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    sizeContainer:{
        backgroundColor:"#FFFFFF",
        height:32,
        width:32,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16
    }

})