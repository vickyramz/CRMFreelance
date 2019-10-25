import React from "react";
import { View, Image, Text, BackHandler, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import{RNCamera} from 'react-native-camera'
import RNTesseractOcr from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
const width = Dimensions.get('window').width
const tessOptions = {
  whitelist: null, 
  blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
};
export default class CardScanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      EmailAddress: '',
      SuccessScanned:false,
      Password: '',
      animate: false,
      image:'',
      DetailsArray:[],
      webviewopen: false,
      externalLink: '',
      draweropen:false,
      CameraView:false,
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
  
  detectText = async () => {
    try {
      const options = {
        quality: 0.8,
        base64: true,
        skipProcessing: true,
      };
      const data = await this.camera.takePictureAsync(options);
      console.log('data',data)
      RNTesseractOcr.recognize(data.path, 'LANG_ENGLISH', tessOptions)
  .then((result) => {
    //this.setState({ ocrResult: result });
    console.log("OCR Result: ", result);
  })
  .catch((err) => {
    console.log("OCR Error: ", err);
  })
  .done();
 
      console.log('uri', uri);
    } catch (e) {
      console.warn(e);
    }
  }
  submitToGoogle = async () => {
    try {
      this.setState({ uploading: true });
      let { image } = this.state;
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 10 },
              { type: "LANDMARK_DETECTION", maxResults: 5 },
              { type: "FACE_DETECTION", maxResults: 5 },
              { type: "LOGO_DETECTION", maxResults: 5 },
              { type: "TEXT_DETECTION", maxResults: 5 },
              { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
              { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
              { type: "IMAGE_PROPERTIES", maxResults: 5 },
              { type: "CROP_HINTS", maxResults: 5 },
              { type: "WEB_DETECTION", maxResults: 5 }
            ],
            image: {
              source: {
                imageUri: image
              }
            }
          }
        ]
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
          "AIzaSyDR-st4uUt8QQdxPfGFmrS-5TQDlZZXAyU",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({
        googleResponse: responseJson,
        uploading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
 
   
  Navigate=()=>{
  //     if(this.state.SuccessScanned){
        
  // this.props.navigation.navigate('CreateCustomer',{DetailsArray:this.state.DetailsArray});
  //     }
  //     else{
  //        this.setState({CameraView:true})
  //        setTimeout(this.detectText,100)
  //     }
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: false,
      path: 'images',
    }
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      //let source = { uri: response.uri };
     
      this.setState({image:response.uri.replace('file://', '')})
      this.submitToGoogle()
    }
  });
         
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
  if(this.state.CameraView){

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
                      <Text style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>Create Customer</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
           

                    </View>
                  </View>
                                </ImageBackground>
                                
                            </View>
                             <View style={{  flex: 0.8, padding: 30,justifyContent:'center' }}>
<Text style={{ fontSize: 17, color: '#fff',marginBottom:20,fontWeight:'bold'}}>Business Card Scanner</Text>
                            <View style={{  flex: 0.5,backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, }} >
                          
                      {this.state.CameraView?
                      <View style={{flex:1}}><RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        onTextRecognized={this.textRecognized}
      style={{flex:1}}
       // onTextRecognized={canDetectText ? this.textRecognized : null}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
          
        }}>
        </RNCamera></View>:<View style={{
    flex:1,
    borderStyle: 'dotted',
    borderWidth: 1,
alignItems:'center',justifyContent:'center',
   borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  }}>
  {!this.state.SuccessScanned?<Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../Assets/photo-camera.png')}/>:<View>
  <View style={{justifyContent:'center',alignItems:'center'}}>
  <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../Assets/successtik.png')}></Image>
  </View>
  
  <Text style={{ fontSize: 17, color: '#000', textAlign: 'center' }}>Scanned</Text>
  </View>}
      
  </View>}      

                            
                            </View>

               <View style={{ paddingTop: 35, paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => this.Navigate()}>
                      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', }}>
                        {/* <Image source={require('../Assets/Shape-1.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                        <Text style={{ color: 'white' }}>Next</Text>
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