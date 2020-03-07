//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,KeyboardAvoidingView,TextInput, ImageBackground, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
export default class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state={EmailAddress:'',Password:''}
  }
  componentDidMount(){
    SplashScreen.hide()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5 }}>
          <ImageBackground source={require('../Assets/signinbg.jpg')}
            style={{ width: '100%', flex: 1 }}>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.5 }}>
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
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
         
          </View>
         </View>
         <View>
         <View style={{ marginHorizontal: 20,paddingVertical:2 }}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Password</Text>
          </View>
            <View style={{paddingHorizontal:20 ,paddingVertical:2}}>
            <TextInput
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
         
          </View>
         </View>
         <View style={{marginHorizontal:30,borderRadius:20,justifyContent:'center',alignItems:'center', backgroundColor:'#f39a3e',height:40,marginTop:20}}>
         <Text style={{ fontSize: 16, color: '#fff', fontWeight:'bold' }}>Sign In</Text>
         </View>
         <View style={{marginHorizontal:60,marginTop:20,flexDirection:'row',alignItems:'center'}}>
         <Text style={{ fontSize: 14, color: '#5c6c80' }}>Dont' have an Account?</Text>
         <Text style={{ fontSize: 14, color: '#2046f6' }}>Sign Up here</Text>
         </View>
          </View>
     
         
       
           {/* 
          <KeyboardAvoidingView style={{ borderBottomWidth: 0.5, borderBottomColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingTop: 20, justifyContent: 'space-between' }}>
            <View style={{ width: '80%' }}>
              <TextInput style={{ height: 40, width: '100%', justifyContent: 'flex-start', color: '#fff' }} onChangeText={(text) => this.setState({ Password: text, ShowAlert: false })} secureTextEntry={true} value={this.state.Password} placeholder='Password' placeholderTextColor='#fff'> </TextInput> 
              </View> <View style={{ alignItems: 'center', justifyContent: 'center' }}> 
              </View>
               </KeyboardAvoidingView> */}
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
});
