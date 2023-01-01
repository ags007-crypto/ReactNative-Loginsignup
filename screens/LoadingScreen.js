/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, TextInput } from 'react-native-paper';

import {
  ActivityIndicator,View,StyleSheet
} from 'react-native';



const LoadingScreen = () => {
 return(
  <View style={styles.loading}>
 <ActivityIndicator size="large" color="blue"/>
</View>
 );
};
const styles=StyleSheet.create({
    loading:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })
export default LoadingScreen;
