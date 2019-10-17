import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Image, ActivityIndicator, View,Dimensions, StyleSheet, Text,BackHandler} from 'react-native'
import { WebView } from 'react-native-webview';


const width = Dimensions.get('window').width

export default class WebViewComponent extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      animate: false,
      url: '',
      title: ''

    })
  }

  componentDidMount() {
    //setTimeout(() => { this.setState({ animate: false }) }, 1500)
  }

  render() {
  
console.log('its comming')
    return (
      <View style={{ flex: 1 }}>
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
      </View>

    );
  }
  
  
}
const styles = StyleSheet.create({
  webView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});