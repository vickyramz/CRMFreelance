/* eslint-disable react/self-closing-comp */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//var HEIGHT = Dimensions.get('window').height; //full height
import SplashScreen from 'react-native-splash-screen'
import AnimatedLoader from "react-native-animated-loader";
const AuthenicatingScreen =(props)=>  {
  SplashScreen.hide();
       const loginOperation = useSelector(state => state.userReducer);
        useEffect(() => {
           IsSignIn();
        },[]);
        const IsSignIn=()=>{
            if(loginOperation && loginOperation.loginResponse && loginOperation.loginResponse.token){
                 props.navigation.navigate('App')
            }
            else{
                props.navigation.navigate('Auth')
            }
        }
    return (
      <SafeAreaView style = {styles.container}>
      <View style={styles.container}>
      
    
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../Assets/9192-loader.json")}
        animationStyle={styles.lottie}
        speed={1}/>
      
      
    

              
      </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent:'center',
    alignItems:'center'

  },
  
});

export default AuthenicatingScreen;
