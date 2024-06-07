import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cartContext } from '../contexts/CartContext';



const ProductDetails = () => {
    const {addToCart} = useContext(cartContext)
    const navigation=useNavigation()
    const route = useRoute();
    const product = route.params.item;
    
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
    const handleAddToCart=()=>{

        product.color=selectedColor;
        product.size=selectedSize;
        addToCart(product)
        navigation.navigate('Cart')

        
    }


     return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.productDetailsContainer}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.productDetailsImg} />
            
            </View>
           <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <Text style={styles.btnText}>Add to Cart</Text>

            </TouchableOpacity>


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
    },imageContainer:{
        justifyContent:"center",
        alignItems:"center"

    },
   
    productDetailsImg: {
        width: '80%',
        height: 420,
        borderRadius:20,
        resizeMode:"contain"
       
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