import React from "react";
import { View, Image, Text, BackHandler, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      EmailAddress: '',
      Password: '',
      animate: false,
      webviewopen: false,
      externalLink: '',
    })
  }

  componentDidMount() {
  
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
          
            <View style={{ flex: 0.2, marginBottom: 10, alignItems: 'flex-end', marginRight: 30 }}>
              <View style={{ flexDirection: 'row' }}>
                {/* <Image source={require('../Assets/applogo.png')} style={{ width: '40%', height: 80, resizeMode: 'contain', alignItems: 'flex-end', justifyContent: 'flex-end' }}> */}
                {/* </Image> */}
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