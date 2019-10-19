import React from "react";
import { View, Image, Text, BackHandler, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import WebViewComponent from '../Components/WebViewComponent'
import { WebView } from 'react-native-webview';
import {LoginAPI} from '../API/PostApi'
import { NavigationActions, StackActions } from 'react-navigation'
import {Base_URL,LoginUrl} from '../API/RequestUrl'
import SplashScreen from 'react-native-splash-screen'
export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      EmailAddress: '',
      Password: '',
       visible: true ,
       animate: false,
      webviewopen: false,
      externalLink: '',
    })
  }

  componentDidMount() {
    SplashScreen.hide();
  }
Navigate=()=>{
  if(this.state.EmailAddress==''){
    Alert.alert('Alert','please Enter email')
  }
 else if(this.state.Password==''){
    Alert.alert('Alert','please Enter Password')
  }
  else{
    let params={
      user_name:this.state.EmailAddress,
      user_pass:this.state.Password
    }
    this.Load()
    LoginAPI('http://got-crm.com/api/mobile/userAuth.php',params,this.successcallback,this.error,this.networkissue)
  }

  //this.props.navigation.navigate('Dashboard')
}
successcallback=async(data)=>{
  //console.log('Login Response--->',data)
  
  if(data.status){  
   console.log('Login Response--->',data.data)    
  await AsyncStorage.setItem('user_id',data.data.user_id.toString())
   const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName:'Home'})],
  });
  this.props.navigation.dispatch(resetAction);
  }
 else {  
    //console.log('Login Response--->',data)   
    Alert.alert('Alert','Invalid user input') 
   }
   this.Hide()
}
Load=()=>{
  this.setState({animate:true})
}
Hide=()=>{
  this.setState({animate:false})
}
error=(error)=>{
  this.Hide()
  Alert.alert(error.status,error.message)
}
networkissue=(error)=>{
  Alert.alert('Failure',error)
}
hideSpinner=()=> {
  this.setState({ visible: false });
}
  render() {
 
    if (this.state.animate) {
      return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator
          color='#1a5fe1'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../Assets/1--Menu.png')} style={{ flex: 1 }}>
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
              <View style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 20 }}>
                <Text style={{ color: 'white', fontSize: 30, fontFamily: 'TitilliumWeb-Bold' }}>Sign in</Text>
                <Text style={{ color: 'white', fontSize: 14, fontFamily: 'TitilliumWeb-Regular' }}>Log in with an existing account</Text>
              </View>
              <View >
                <View style={{ borderRadius: 10, backgroundColor: '#fff', padding: 30, marginLeft: 30, marginRight: 30 }}>
                  <KeyboardAvoidingView style={{ borderBottomWidth: 0.5, borderBottomColor: '#919191', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ width: '80%' }}>
                      <TextInput style={{ height: 40, width: '100%', fontFamily: 'TitilliumWeb-Regular', justifyContent: 'flex-start' }}
                        onChangeText={(text) => this.setState({ EmailAddress: text })}
                        value={this.state.EmailAddress}
                        placeholder='Email address' placeholderTextColor='black'>
                      </TextInput>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                      <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Icon---Username.png')} />
                    </View>
                  </KeyboardAvoidingView>

                  <KeyboardAvoidingView style={{ borderBottomWidth: 0.5, borderBottomColor: '#919191', flexDirection: 'row', alignItems: 'center', paddingTop: 20, justifyContent: 'space-between' }}>

                    <View style={{ width: '80%' }}>
                      <TextInput style={{ height: 40, width: '100%', fontFamily: 'TitilliumWeb-Regular', justifyContent: 'flex-start' }}
                        onChangeText={(text) => this.setState({ Password: text })} secureTextEntry={true}
                        value={this.state.Password}
                        placeholder='Password' placeholderTextColor='black'>
                      </TextInput>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Icon---Password.png')} />
                    </View>
                  </KeyboardAvoidingView>
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 30 }}>
                    <View style={{ justifyContent: 'space-between', paddingRight: 20, flexDirection: 'row' }}>
                     
                    </View>
                    {/* <TouchableOpacity onPress={() => this.ForgotPasswordPress()} style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 12, paddingLeft: 10, color: '#505050', fontFamily: 'TitilliumWeb-Regular' }}>Forgot password?</Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => this.Navigate()}>
                      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', }}>
                        {/* <Image source={require('../Assets/Shape-1.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                        <Text style={{ color: 'white', fontFamily: 'TitilliumWeb-Bold' }}>SIGN IN</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text numberOfLines={1} style={{ fontSize: 8 }}>For any assistance please contact our Customer Care 800 11 800 10</Text>
                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                      {/* <TouchableOpacity onPress={() =>Alert.alert('Coming Soon','This feature will be available very soon')}> */}
                      <View>
                        {/* <Text style={{ fontSize: 14, fontFamily: 'TitilliumWeb-Regular' }} >Don have an account? Sign up</Text> */}
                      </View>
                    </TouchableOpacity>

                  </View>

                </View>
              </View>
            </View>
            <View style={{ flex: 0.2, marginBottom: 10, alignItems: 'flex-end', marginRight: 30 }}>
              <View style={{ flexDirection: 'row' }}>
                {/* <Image source={require('../Assets/applogo.png')} style={{ width: '40%', height: 80, resizeMode: 'contain', alignItems: 'flex-end', justifyContent: 'flex-end' }}> */}
                {/* </Image> */}
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
//       <View style={{flex:1}}>
//  <WebView
//          javaScriptEnabled scalesPageToFit={true}
//         source={{uri: 'https://app.tomatomedical.com/'}}
//         style={{marginTop: 20}}
//         onLoad={() => this.hideSpinner()}
//       /> 
// {this.state.visible && (
//   <View style={{flex:1, alignItems:'center'}}>
//   <ActivityIndicator
//             style={{}}
//             size="large"
//           />
//   </View>
          
//         )}
//       </View>
         
    
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});