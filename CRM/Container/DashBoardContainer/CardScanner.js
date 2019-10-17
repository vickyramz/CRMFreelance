import React from "react";
import { View, Image, Text, BackHandler, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const width = Dimensions.get('window').width
export default class CardScanner extends React.Component {

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
  Navigate=()=>{
         this.props.navigation.navigate('CreateCustomer');
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
          
           <View style={{flex:0.2}}>
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
                             <View style={{  flex: 0.8, padding: 30,justifyContent:'center' }}>
<Text style={{ fontSize: 17, fontFamily: 'TitilliumWeb-Bold', color: '#fff',marginBottom:20,fontWeight:'bold'}}>Business Card Scanner</Text>
                            <View style={{  flex: 0.5,backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, }} >
<View style={{
    flex:1,
    borderStyle: 'dotted',
    borderWidth: 1,
alignItems:'center',justifyContent:'center',
   borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  }}>
      <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../Assets/photo-camera.png')} /> 
  </View>
                            
                            </View>

               <View style={{ paddingTop: 35, paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}>
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