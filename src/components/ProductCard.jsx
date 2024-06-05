import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const ProductCard = ({item,handleLike}) => {
    
    return (
        <View style={styles.cardContainer}>
            <Image source={{uri:item.image}} style={styles.productImg} />
            <View style={styles.content}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            {
                item?.isLiked ? <TouchableOpacity style={styles.likeContainer} onPress={() => handleLike(item)}>
                    <AntDesign name="heart" color="#E55B5B" size={20} />

                </TouchableOpacity> 
                : <TouchableOpacity style={styles.likeContainer} onPress={() => handleLike(item)}>
                    <AntDesign name="hearto" color="#E55B5B" size={20} />

                </TouchableOpacity>
            }
        </View>

    )
}

export default ProductCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        position: 'relative'


    },
    productImg: {
        borderRadius: 20,
        height: 256,
        width: '100%'
    },
    content: {
        paddingLeft: 5,
        marginVertical: 5
    },
    productTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444444'
    },
    price: {
        fontSize: 18,
        fontWeight: "500",
        color: "#9C9C9C"
    },
    likeContainer: {
        width: 34,
        height: 34,
        backgroundColor: "#fff",
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 10,
        right: 10
    }

})