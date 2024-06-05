import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';


const ProductDetails = () => {
    const Sizes = ['S', 'M', 'L', 'XL'];
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const colorsArray = [
        "#91A1B0",
        "#B11D1D",
        "#1F44A3",
        "#9F632A",
        "#1D752B",
        "#000000",
    ];


    imgUrl = "https://s3-alpha-sig.figma.com/img/c619/1d1f/2ef87431bb9714190324b36b9e18bb8e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyhs8tG-I5i4~hX8G39ccfSiOz7-A5J6cWlliGo-kEJ1~4-u4GdUUt9QuMWIVwtXCgA9kc1mLDkDuhh~d3~Kvh4GowkQa0YUBE2QD9E9r6hIhTBXCpMm6WIbSdqpEqp87JwvXErLUWmxc3lUEPQlGvQJodc7pURYG6N-J5UXvNqZz16mTFXcc9WjyUOu6mcAdMJ66qDFvUtLkC6FFjo1uCcL-~pb8SqyiU-3Ognb1Z8A6g3u9KHDSFGQTxSTsmGaXPKn~voL1TWK7kYCaoTS7RptC3aEf6LbOajIp4LHlCWsQ9renXhJOvK3CooqEXEIp1fiqjtKSZJKA~c3WQqRmA__"
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.productDetailsContainer}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: imgUrl }} style={styles.productDetailsImg} />
            <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Winter Coat</Text>
                <Text style={styles.productPrice}>$65.9</Text>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.productTitle}>Size</Text>
                <View style={styles.sizeList}>
                    {
                        Sizes.map((size,index) => {
                            return (<TouchableOpacity key={index} onPress={() => setSelectedSize(size)} style={styles.size}><Text style={[styles.sizeText, selectedSize == size && { color: "#E55B5B" }]}>{size}</Text></TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.colorsContainer}>
                <Text style={styles.productTitle}>Colors</Text>

                <View style={styles.colorGroup}>
                    {colorsArray.map((color,index) => {
                        return (<TouchableOpacity key={index} onPress={() => setSelectedColor(color)} style={[styles.colorBorder, selectedColor == color && { borderColor: color, borderWidth: 2 }]}>
                            <View style={[styles.colorCircle, { backgroundColor: color }]} />
                        </TouchableOpacity>)
                    })}
                </View>
            </View>
            <View style={styles.button}>
                <Text style={styles.btnText}>Add to Cart</Text>

            </View>


        </LinearGradient >
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    productDetailsContainer: {
        flex: 1
    },
    headerContainer: {
        padding: 20,
    },
    productDetailsImg: {
        width: '100%',
        height: 420,

    },
    productDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    productTitle: {
        color: '#444444',
        fontSize: 20,
        fontWeight: "500"
    },
    productPrice: {
        fontWeight: "600",
        fontSize: 20,
        color: '#4D4C4C'

    },
    sizeContainer: {
        marginHorizontal: 20
    },
    sizeList: {
        flexDirection: "row",
        marginVertical: 10,
        gap: 10
    }
    , sizeText: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '500'
    },
    size: {
        width: 36,
        height: 36,
        backgroundColor: "#FFF",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center"
    },
    colorsContainer: {
        marginHorizontal: 20
    },
    colorBorder: {
        height: 48,
        width: 48,

        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    colorCircle: {
        width: 36,
        height: 36,
        borderRadius: 18

    },
    colorGroup: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    btnText:{
        fontSize:24,
        color:'#fff',
        fontWeight:"600",
        padding:8,
        textAlign:"center"
    },
    button:{
        backgroundColor:"#E96E6E",
        marginVertical:10,
        marginHorizontal:50,
        borderRadius:20
    }
})