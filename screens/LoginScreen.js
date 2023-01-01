/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  KeyboardAvoidingView
} from 'react-native';



const LoginScreen = (props) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
 const sendCred= async (props)=>{
    fetch("http://10.0.2.2:3000/signin",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
    })
    .then(res=>res.json())
    .then(async (data)=>{ 
        try{
          await AsyncStorage.setItem('token',data.token)
          props.navigation.navigate("home")
        }catch (e){
          console.log("Error",e)
        }
    })
  }
 return(
  <>
  <KeyboardAvoidingView behavior="position">
<StatusBar backgroundColor="green" barStyle="light-content"/>
<Text
  style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>
  Welcome to</Text>
  <Text style={{fontSize:30,marginLeft:18,color:"blue"}}>
  AGS Studio
  </Text>
  <View
    style={{
      borderBottomColor:"blue",
      borderBottomWidth:4,
      borderRadius:10,
      marginLeft:20,
      marginRight:150,
      marginTop:4
    }}/>
    <Text
    style={{
      fontSize:20,marginLeft:18,marginTop:20
    }}>Login with email</Text>
    <TextInput
    label='Email'
    mode="outlined"
    value={email}
    style={{marginLeft:18,marginRight:18,marginTop:18}}
    theme={{colors:{primary:"green"}}}
    onChangeText={(text)=>setEmail(text)}
      />
     <TextInput
    label='Password'
    secureTextEntry={true}
    mode="outlined"
    value={password}
    style={{marginLeft:18,marginRight:18,marginTop:18}}
    theme={{colors:{primary:"green"}}}
    onChangeText={(text)=>setPassword(text)}
    />

  <Button style={{marginLeft:18,marginRight:18,marginTop:18}} mode="contained" buttonColor='red' 
  onPress={() => sendCred(props)}>
  Login
</Button>
<TouchableOpacity>
<Text
    style={{
      fontSize:15,marginLeft:18,marginTop:20
    }} onPress={()=>props.navigation.navigate("Signup")}
    >Dont have an account?</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
</>
 );
};

export default LoginScreen;
