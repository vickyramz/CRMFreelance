import React from "react";
import { View, Image, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const width = Dimensions.get('window').width
export default class CreateCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      EmailAddress: '',
      Password: '',
      animate: false,
      webviewopen: false,
      externalLink: '',
      draweropen:false,
    })
  }

  componentDidMount() {
  
  }

 static navigationOptions =
    {
      header: null,
    };
  NavigationOpen = () => {
    console.log('Navigation drawer open')
    this.setState({draweropen:!this.state.draweropen})
    this.props.navigation.toggleDrawer();
    //   this.props.navigation.toggleDrawer({
    //     side:'left',
    //     animated: true,
    //     to: 'closed',
    // });
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
          
           <View style={{flex:0.1}}>
                                <ImageBackground style={{ resizeMode: 'contain', width: width, height: 80, justifyContent: 'flex-start', padding: 10 }} source={require('../Assets/menu.png')}>
                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.NavigationOpen} style={{ width: 40, height: 40, justifyContent: 'center' }}>
                      <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100 }} source={require('../Assets/ham.png')}></Image>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, fontFamily: 'TitilliumWeb-Bold', color: '#fff', textAlign: 'center' }}>Create Customer</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
           

                    </View>
                  </View>
                                </ImageBackground>
                                
                            </View>
                             <View style={{  flex: 0.9, padding: 30, }}>
<Text style={{ fontSize: 17, fontFamily: 'TitilliumWeb-Bold', color: '#fff',marginBottom:20,fontWeight:'bold'}}>Business Card Scanner</Text>
                            <View style={{  flex: 0.5,backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, }} >
  <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginBottom: 20, marginEnd: 30, alignItems: 'center', paddingTop: 10 }}>

<View style={{ alignItems: 'flex-start', width: '80%' }}>
    <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
        onChangeText={(text) => this.setState({ full_name: text })}
        placeholder='Full name' placeholderTextColor='black'
    />
</View>
<View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
    {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Icon---Username.png')} /> */}
</View>
</KeyboardAvoidingView>
                                    
                                

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.setState({ phone_number: text })} keyboardType={'numeric'} maxLength={10}
                                            placeholder='Phone number' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-12.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'space-around' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.validate(text)}
                                            value={this.state.email} keyboardType={'email-address'}
                                            placeholder='Email address' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Shape-111.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <TouchableOpacity onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
                                        <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-end' }}>
                                            <Text style={{ height: 40, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', paddingTop: '3%' }}

                                            >{this.state.Dates}
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                            {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-13.png')} /> */}
                                        </View>
                                    </TouchableOpacity>
                                </KeyboardAvoidingView>

                                <TouchableOpacity style={{ height: '12%', paddingLeft: '12%', paddingRight: '12%', alignItems: 'stretch', justifyContent: 'center' }}>
                                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                                        {/* <Image source={require('../Assets/Shape-1-copy-2.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                                        <Text style={{ color: 'white' }}>SIGN UP</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                           

                                </View>
                            
                            </View>

               <View style={{ paddingTop: 35, paddingLeft: 25, paddingRight: 25, paddingBottom: 10,justifyContent:'flex-end' }}>
                    <TouchableOpacity onPress={() => this.Navigate()}>
                      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', }}>
                        {/* <Image source={require('../Assets/Shape-1.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                        <Text style={{ color: 'white', fontFamily: 'TitilliumWeb-Bold' }}>Next</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                        </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
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