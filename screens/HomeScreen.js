/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ActivityIndicator,Text
} from 'react-native';



const HomeScreen = (props) => {
 const signout = () => {
    AsyncStorage.removeItem("token").then(()=>{
      props.navigation.navigate("Login")
    })
}
 return(
  <>
<Text style={{fontSize:18}}>You are logged in.
</Text>

<Button 
  style={{marginLeft:18,marginRight:18,marginTop:18}} 
  mode="contained" buttonColor='red' 
  onPress={() => signout()}>
  Sign out
</Button>
</>
 );
};

export default HomeScreen;
