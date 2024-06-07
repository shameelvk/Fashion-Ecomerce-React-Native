import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { cartContext } from '../contexts/CartContext'

const CartScreen = () => {
    
    const {cartData,totalPrice,handleDeleteCart} = useContext(cartContext)
    
     return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header isCart={true} />

            <FlatList showsVerticalScrollIndicator={false} style={styles.cartCardContainer} data={cartData} keyExtractor={(item)=>item.id} renderItem={({ item }) => <CartCard item={item} handleDeleteCart={handleDeleteCart} />}
                 ListFooterComponent={<>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.textStyle}>Total:</Text>
                    <Text style={styles.price}>${totalPrice}</Text>
                </View>
                <View style={[styles.priceAndTitle,]}>
                    <Text style={styles.textStyle}>Shipping:</Text>
                    <Text style={styles.price}>Free</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={styles.priceAndTitle}>
                    <Text style={styles.textStyle}>Grand Total:</Text>
                    <Text style={[styles.price, { color: "#3C3C3C" }]}>${totalPrice}</Text>
                </View>
            </>} />
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Checkout</Text>
            </TouchableOpacity>




        </LinearGradient>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    cartCardContainer: {
        marginVertical: 20

    }, priceAndTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    }, textStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#757575"
    },
    price: {
        color: '#888888',
        fontSize: 18,
        fontWeight: "600"
    },
    btnText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '600',

    }
    , btnContainer: {
        height: 65,
        width: '100%',
        backgroundColor: '#E96E6E',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        alignSelf: "center",
        marginVertical: 10
    }
})