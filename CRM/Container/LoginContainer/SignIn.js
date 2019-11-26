import React from "react";
import { View, Image, Text, BackHandler, ImageBackground,Keyboard,  TouchableOpacity, StyleSheet, AsyncStorage, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import WebViewComponent from '../Components/WebViewComponent'
import { WebView } from 'react-native-webview';
import {LoginAPI} from '../API/PostApi'
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { NavigationActions, StackActions } from 'react-navigation'
import Snackbar from '../Components/Snackbar'
import {Base_URL,LoginUrl} from '../API/RequestUrl'
import SplashScreen from 'react-native-splash-screen'
export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      EmailAddress: '',
      Password: '',
       visible: true ,
       color:'#EB6A00',
       image:require('../Assets/warning.png'),
       ShowAlert:false,
       alert:'',
       animate: false,
      webviewopen: false,
      externalLink: '',
    })
  }

  componentDidMount() {
    SplashScreen.hide();
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], webClientId: '1016162784235-1hnu6qmfdtk6liolvor5lc24q37mm8cv.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: '', 
      loginHint: '', 
      forceConsentPrompt: true, 
      accountName: '',
      iosClientId: '1016162784235-2b64s8hgrin19d854mc8b14rc1bal8c0.apps.googleusercontent.com'
      });
  }
  _signIn = async () => {
    try {
    //  Alert.alert('User Info','')

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //this.setState({ userInfo: userInfo, loggedIn: true });
      Alert.alert('User Info','success')
    } catch (error) {
      Alert.alert('User error',error.code)

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({ loggedIn: false });
      } else {
        // some other error
        this.setState({ loggedIn: false });
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  hidebar=()=>
  {
    this.setState({ShowAlert:false})
  }
  showbar=(msg)=>
  {
    this.setState({ShowAlert:true,alert:msg})
  }
Navigate=()=>{
  if(this.state.EmailAddress==''){
    //Alert.alert('Alert','please Enter email')
    this.showbar('please Enter email')
  }
 else if(this.state.Password==''){
  this.showbar('please Enter Password')
  }
  else{
    let params={
      user_name:this.state.EmailAddress,
      user_pass:this.state.Password
    }
    
    this.LoginStatic()
   // LoginAPI('http://got-crm.com/api/mobile/userAuth.php',params,this.successcallback,this.error,this.networkissue)
  }

  //this.props.navigation.navigate('Dashboard')
}
_onPressHandler() {
  Keyboard.dismiss()
  if(this.state.EmailAddress==''){
    //Alert.alert('Alert','please Enter email')
    this.showbar('please Enter email')
  }
 else if(this.state.Password==''){
  this.showbar('please Enter Password')
  }
  else{
    let params={
      user_name:this.state.EmailAddress,
      user_pass:this.state.Password
      
    }
    this.setState({color:'#6BAD00',image:require('../Assets/success.png')})
    this.showbar('Login Success')
    this.loadingButton.showLoading(true);
  
    // mock
    setTimeout(this.nav,2000);
    
}

}
nav=()=>{
  this.props.navigation.navigate('Dashboard')
}
LoginStatic=()=>{
  this.setState({color:'#6BAD00',image:require('../Assets/success.png'),animate:true})
  this.showbar('Login Success')
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
  this.showbar('Invalid credentials')
}
networkissue=(error)=>{
  Alert.alert('Failure',error)
}
hideSpinner=()=> {
  this.setState({ visible: false });
}
  render() {
 

    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'#FD325F' }}>
        <View style={{ flex: 1 }}>
        <LinearGradient
  colors= {['#FC8101','#FF8B23','#FEA049','#FFB26C']} style={{flex:1}}> 
          <Snackbar Visible={this.state.ShowAlert} color={this.state.color} image={this.state.image} alert={this.state.alert}></Snackbar>
          
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
              <View style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 20 }}>
                <Text style={{ color: 'white', fontWeight:'bold' ,fontSize:25}}>Sign in</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>Log in with an existing account</Text>
              </View>
              <View >
                <View style={{ borderRadius: 10, backgroundColor: 'transparent', padding: 30, marginLeft: 30, marginRight: 30 }}>
                  <KeyboardAvoidingView style={{ borderBottomWidth: 0.5, borderBottomColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ width: '80%' }}>
                      <TextInput style={{ height: 40, width: '100%', justifyContent: 'flex-start',color:'#fff' }}
                        onChangeText={(text) => this.setState({ EmailAddress: text ,ShowAlert:false})}
                        value={this.state.EmailAddress}
                        placeholder='Email address' placeholderTextColor='#fff'>
                      </TextInput>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                      <Image style={{ width: 20, height: 20, resizeMode: 'contain',tintColor:'#fff' }} source={require('../Assets/Icon---Username.png')} />
                    </View>
                  </KeyboardAvoidingView>

                  <KeyboardAvoidingView style={{ borderBottomWidth: 0.5, borderBottomColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingTop: 20, justifyContent: 'space-between' }}>

                    <View style={{ width: '80%' }}>
                      <TextInput style={{ height: 40, width: '100%', justifyContent: 'flex-start',color:'#fff' }}
                        onChangeText={(text) => this.setState({ Password: text ,ShowAlert:false})} secureTextEntry={true}
                        value={this.state.Password}
                        placeholder='Password' placeholderTextColor='#fff'>
                      </TextInput>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={{ width: 20, height: 20, resizeMode: 'contain',tintColor:'#fff' }} source={require('../Assets/Icon---Password.png')} />
                    </View>
                  </KeyboardAvoidingView>
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 30 }}>
                    <View style={{ justifyContent: 'space-between', paddingRight: 20, flexDirection: 'row' }}>
                     
                    </View>
                    {/* <TouchableOpacity onPress={() => this.ForgotPasswordPress()} style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 12, paddingLeft: 10, color: '#505050' }}>Forgot password?</Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}>
                  <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={200}
          height={50}
          title="sign In"
          titleFontSize={16}
          titleColor="#000"
          backgroundColor="#E1E100"
          borderRadius={10}
          onPress={this._onPressHandler.bind(this)}
        />
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text numberOfLines={1} style={{ fontSize: 8,color:'#fff' }}>For any assistance please contact our Customer Care 800 11 800 10</Text>
                  </View>
                  <Spinner
            visible={this.state.animate}
            textContent={'sign In...'}
            overlayColor='rgba(0,0,0,0.5)'
            animation='fade'
            size='large'   
            color='#f4347f'
            textStyle={styles.spinnerTextStyle}
          />
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                      {/* <TouchableOpacity onPress={() =>Alert.alert('Coming Soon','This feature will be available very soon')}> */}
                      <View>
                        {/* <Text style={{ fontSize: 14 }} >Don have an account? Sign up</Text> */}
                      </View>
                    </TouchableOpacity>

                  </View>

                </View>
              </View>
            </View>
            <View style={{ flex: 0.2,marginRight: 30,justifyContent:'flex-start',alignItems:'center' }}>
              <View style={{ flexDirection: 'row' }}>
              <GoogleSigninButton
style={{ width: '90%', height: 50,marginLeft:30 }}
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Dark}
onPress={this._signIn}
disabled={this.state.isSigninInProgress} />
              </View>
            </View>
           
          </LinearGradient>
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
  spinnerTextStyle: {
    color: '#FFF'
  },
});