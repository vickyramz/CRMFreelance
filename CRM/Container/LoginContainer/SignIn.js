//This is an example code to set Backgroud image///
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import * as BindActions from '../Redux/Actions';
//import react in our code. 
import { View, SafeAreaView,Text,TouchableOpacity,TextInput,KeyboardAvoidingView, ImageBackground,ActivityIndicator, StyleSheet, Image, ShadowPropTypesIOS } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'

function  SignIn (props) {
  useEffect(() => {
  SplashScreen.hide()
  }, [])
  const [inputs,setInputs]=useState({
    userName:'gallie@banblog.com',
    password:'Welcome123@#'
  })
  const dispatch = useDispatch();
  const [IsEmailEmpty,setEmailVisible]=useState(false)
  const [IsPasswordEmpty,setPasswordVisible]=useState(false)
  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [error, setError] = useState('');
  const loginOperation = useSelector(state => state.userReducer);
  const { userName, password } = inputs;

  function HandleChange(item,name){
    setInputs(inputs => ({ ...inputs, [name]: item }));
    if(name==='userName'){
      setEmailVisible(false)
    }
    if(name==='password'){
      setPasswordVisible(false)
    }
    console.log(inputs);
  }
  function AuthSignIn(){
     if(userName===null || userName===undefined || userName===''){
       setEmailVisible(true)
     }
     else if(password===null || password===undefined || password===''){
       setPasswordVisible(true)
     }
     else{
       authenticationProcess();
     }
  }
  function authenticationProcess(){
    let params={
      email:userName,
      password:password
    }
    console.log('params',params)
    dispatch(BindActions.login(params,''));
  }
   
    if (loginOperation.loginSuccess) {
      loginOperation.loginSuccess=false
      setLoading(false)
      //setAlerts(false);
      console.log('Login',loginOperation)
      props.navigation.navigate('App')
    
    }
    if (loginOperation.loginPending) {
        loginOperation.loginPending=false
        setLoading(true)
        //setAlerts(false);
      
    }
    if (loginOperation.loginError) {
      loginOperation.loginError=false
      setLoading(false)
      setAlerts(true);
      setError(loginOperation.error)
  
    }
    const snackBarActions = () => {
      setAlerts(false);
    };
    if (loader) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView
   // adjust the value here if you need more padding
  style = {{ flex: 1 }}
  behavior = "padding" >
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
         {IsEmailEmpty?  <View style={{marginHorizontal: 20,paddingVertical:2 }}>
          <Text style={{ fontSize: 16, color: 'red',  }}>Please enter email</Text>
          </View>:null}
        
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
          {IsPasswordEmpty?<View style={{marginHorizontal: 20,paddingVertical:2 }}>
          <Text style={{ fontSize: 16, color: 'red',  }}>Please enter password</Text>
          </View>:null}
          
         </View>
         <TouchableOpacity onPress={()=>AuthSignIn()}>
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
     <SnackBar
            autoHidingTime={2000}
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText=""
        />
      </View>
 
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    labelInput: {
      color: '#96989a',
      fontSize: 14,
      fontFamily: 'AvenirNextLTPro-Regular',
    },
    formInput: {
      borderBottomWidth: 0.5,
      borderColor: '#999999',
  
    },
    input: {
      borderWidth: 0,
      fontSize: 16,
      fontFamily: 'AvenirNextLTPro-Regular',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchIcon: {
      width: 25,
      height: 25,
      position: 'absolute',
      alignSelf: 'flex-end',
      top: 23,
    },
  });
export default SignIn;
