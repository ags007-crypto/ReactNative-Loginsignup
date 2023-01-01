/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import { Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  KeyboardAvoidingView
} from 'react-native';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

const App= () => {
  const [isloggedin,setLogged]=useState(null)

  useEffect( ()=>{
   async function fetchData(){
    const token =   await AsyncStorage.getItem('token')
    if(token){
      setLogged(true)
      console.log(token)
    }else{
      setLogged(false)
    }}fetchData();
  
  },[])
 
 return(
  
   <NavigationContainer>
      <Stack.Navigator>
        {
        isloggedin==null ?
          <Stack.Screen name="loading" component={LoadingScreen}/>
          :isloggedin==true ?
          <>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
</>

        :
        <>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="home" component={HomeScreen}/>

        <Stack.Screen name="Login" component={LoginScreen}/></>
        }
      
       
            </Stack.Navigator>
    </NavigationContainer>

 );
};


export default App;
