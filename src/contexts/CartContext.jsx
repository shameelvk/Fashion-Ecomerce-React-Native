import { createContext,useEffect,useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
 export const cartContext=createContext();

const CartContext=({children})=>{
const [cartData, setCartData] = useState([])
const [totalPrice, setTotalPrice] = useState(0)

useEffect(()=>{
    handleCartLoad()

},[])
const handleCartLoad=async()=>{
    let cart=await AsyncStorage.getItem('Cart');
    cart=cart? JSON.parse(cart):[];
    setCartData(cart)
    handleTotalAmount(cart)
}

const handleTotalAmount=(data)=>{
    let totalAmount=data.reduce((amount,item)=>amount+item.price,0)
    setTotalPrice(totalAmount)
}

const handleDeleteCart=async(item)=>{
    let newCartData=cartData.filter((cart)=>cart.id!=item.id);
    setCartData(newCartData);
    handleTotalAmount(newCartData)
    await AsyncStorage.setItem("Cart",JSON.stringify(newCartData))
    


}


const addToCart=async(item)=>{

    itemExist=cartData.findIndex((cart)=>cart.id===item.id);
    if(itemExist===-1){
        let newCartData=[...cartData,item]
        setCartData(newCartData);
        handleTotalAmount(newCartData)
        await AsyncStorage.setItem("Cart",JSON.stringify(newCartData))
    }

}


    let value={
        cartData,
        addToCart,
        totalPrice,
        handleDeleteCart

    }
  return(
    <cartContext.Provider value={value}>
    {children}
</cartContext.Provider>
  )

}

export default CartContext;