//This is an example code to set Backgroud image///
import React, { useState, useEffect } from 'react';
//import react in our code. 
import { View, Text,TouchableOpacity,TextInput, ImageBackground, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'

function  SignIn () {
  useEffect(() => {
  SplashScreen.hide()
  }, [])
  const [inputs,setInputs]=useState({
    userName:'',
    password:''
  })
  const { userName, password } = inputs;
  function HandleChange(item,name){
    setInputs(inputs => ({ ...inputs, [name]: item }));
    console.log(inputs);
  }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <ImageBackground source={require('../Assets/signinbg.jpg')}
            style={{ width: '100%', flex: 1 }}>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.6 }}>
          <View style={{ marginHorizontal: 20, marginTop: -30 }}>
            <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={require('../Assets/goi-logo.png')}>
            </Image>
          </View>
          {/* <View style={{ marginHorizontal: 20, marginTop: -30 }}>
            <Text style={{ fontSize: 22, color: '#000', fontWeight: 'bold' }}>Sign In</Text>
          </View> */}
          <View style={{marginTop:-30}}>
          <View>
         <View style={{ marginHorizontal: 20,paddingVertical:2 }}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Email</Text>
          </View>
            <View style={{paddingHorizontal:20 ,paddingVertical:2}}>
            <TextInput
            placeholder={'Abinaya@got-softwarescom'}
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => HandleChange(text,'userName')}
        value={userName}
      />
         
          </View>
         </View>
         <View>
         <View style={{ marginHorizontal: 20,paddingVertical:2 }}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Password</Text>
          </View>
            <View style={{paddingHorizontal:20 ,paddingVertical:2}}>
            <TextInput
             placeholder={'**************'}
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) =>HandleChange(text,'password')}
        value={password}
      />
         
          </View>
         </View>
         <TouchableOpacity >
         <View style={{marginHorizontal:30,borderRadius:20,justifyContent:'center',alignItems:'center', backgroundColor:'#f39a3e',height:40,marginTop:20}}>
         <Text style={{ fontSize: 16, color: '#fff', fontWeight:'bold' }}>Sign In</Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity >
         <View style={{marginHorizontal:60,marginTop:20,flexDirection:'row',alignItems:'center'}}>
         <Text style={{ fontSize: 14, color: '#5c6c80' }}>Dont' have an Account?</Text>
         <Text style={{ fontSize: 14, color: '#2046f6' }}>Sign Up here</Text>
         </View>
         </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
export default SignIn;
