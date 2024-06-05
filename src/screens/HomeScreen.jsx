import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json'



const Categories = [
    'Trending Now',
    'All',
    'New',
    'Men',
    'Women',
    'Kids',
    'Accessories',
    'Sale',
    'Footwear',
    'Beauty & Health',
    'Sportswear',
    'Gifts',
    'Luxury',
    'Outdoor',
    'Clearance',
    'Plus Size',
    'Sustainable',
    'Best Sellers'
];


const HomeScreen = () => {
    const [selectCategory, setselectCategory] = useState(null)
    const [product, setproduct] = useState(data.products)
    const handleLike=(item)=>{
        let newProduct=product.map((prod)=>{
            if(prod.id==item.id){
                return{
                    ...prod,isLiked:!prod.isLiked,
                }
            }
            return prod;
        })
        console.log(newProduct);
        setproduct(newProduct)
    }
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header />
            <FlatList ListHeaderComponent={
                <>
                    <Text style={styles.matchText}>Match Your Style</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Fontisto name="search" size={26} color="#C0C0C0" />
                        </View>
                        <TextInput style={styles.inputText} placeholderTextColor={'#B6B6B6'} placeholder='Search' />
                    </View>
                    <FlatList data={Categories} renderItem={({ item }) => <Category item={item} selectCategory={selectCategory} setselectCategory={setselectCategory} />} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item) => item} />

                </>
            } data={product} renderItem={({ item }) => <ProductCard item={item} handleLike={handleLike} />} numColumns={2} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 20 }} />


        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

        padding: 20
    },
    matchText: {
        color: "black",
        fontSize: 28,
        fontFamily: 'Poppins',
        fontWeight: "400",
        marginTop: 20
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        height: 48,
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 12
    },
    inputText: {
        flex: 1,
        color: "black",
        fontSize: 18

    },
    iconContainer: {
        padding: 10
    },

})