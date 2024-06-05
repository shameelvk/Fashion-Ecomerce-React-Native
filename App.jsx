import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ProductDetails from './src/screens/ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Home_Stack=()=>{
  return(
  <Stack.Navigator  screenOptions={{headerShown:false}}>
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="PRODUCTDETAILS" component={ProductDetails} />
  
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false,tabBarActiveTintColor:"#E96E6E"}} >
        <Tab.Screen name="HOME_STACK" component={Home_Stack}  options={{tabBarIcon:({color,size})=><Entypo name="home" size={size} color={color} />}}/>
        <Tab.Screen name="Reorder" component={SettingsScreen} options={{tabBarIcon:({color,size})=><MaterialIcons name="reorder" size={size} color={color} />}} />
        <Tab.Screen name="Cart" component={HomeScreen} options={{tabBarIcon:({color,size})=><MaterialIcons name="shopping-cart" size={size} color={color} />}} />
        <Tab.Screen name="Account" component={HomeScreen} options={{tabBarIcon:({color,size})=><FontAwesome6 name="user" size={size} color={color} />}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}