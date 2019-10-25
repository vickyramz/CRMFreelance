import React from "react";
import { View, Image, Text,AsyncStorage, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const width = Dimensions.get('window').width
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { LoginAPI } from "../API/PostApi";
export default class CreateCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      DetailsArray:this.props.navigation.state.params.DetailsArray,
      contactperson:'',
      email: '',
      phone_number: '',
      mobileno:'',
      address:'',
      companyname:'',
      visibles:false,
      message:'',
      animate: false,
      webviewopen: false,
      externalLink: '',
      draweropen:false,
    })
  }

  componentDidMount() {
   this.GetDetails()
  }
  GetDetails=()=>{
    this.setState({ contactperson:this.state.DetailsArray[0].key?this.state.DetailsArray[0].key:'',
      email: this.state.DetailsArray[1].key?this.state.DetailsArray[1].key:'',
      phone_number: this.state.DetailsArray[2].key?this.state.DetailsArray[2].key:'',
      mobileno:this.state.DetailsArray[3].key?this.state.DetailsArray[3].key:'',
      address:this.state.DetailsArray[4].key?this.state.DetailsArray[4].key:'',
      companyname:this.state.DetailsArray[5].key?this.state.DetailsArray[5].key:'',})
     
  }
  Load=()=>{
    this.setState({animate:true})
  }
  Hide=()=>{
    this.setState({animate:false})
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
  CreateCustomer=()=>{
    if(this.state.companyname==null ||this.state.companyname=='undefined',this.state.companyname==''){
      Alert.alert('Alert','Please enter companyname')
    }
   else if(this.state.contactperson==null ||this.state.contactperson=='undefined',this.state.contactperson==''){
      Alert.alert('Alert','Please enter contactperson')
    }
    else if(this.state.address==null ||this.state.address=='undefined',this.state.address==''){
      Alert.alert('Alert','Please enter address')
    }
    else if(this.state.phone_number==null ||this.state.phone_number=='undefined',this.state.phone_number==''){
      Alert.alert('Alert','Please enter phone number')
    }
    else if(this.state.mobileno==null ||this.state.mobileno=='undefined',this.state.mobileno==''){
      Alert.alert('Alert','Please enter phone number')
    }
    else if(this.state.email==null ||this.state.email=='undefined',this.state.email==''){
      Alert.alert('Alert','Please enter email')
    }
    else{
      this.CreateCustomerAction()
    }
  }
  CreateCustomerAction=async()=>{
let userid=await AsyncStorage.getItem('user_id')
let params={
  companyname:this.state.companyname,
  contactperson:this.state.contactperson,
  mobileno:this.state.mobileno,
  alterno:this.state.phone_number,
  emailid:this.state.email,
  address:this.state.address,
  user_id:userid
}
LoginAPI('http://got-crm.com/api/mobile/addCustomer.php',params,this.successCallback,this.error,this.networkissue)
  }
  successCallback=(data)=>{
    if(data){
      this.setState({visibles:true,message:data.message})
      setTimeout(this.nav,1000)
    }
  }
  nav=()=>{
   this.setState({visibles:false})
   this.props.navigation.goBack(null)
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
                      <Text style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>Create Customer</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
           

                    </View>
                  </View>
                                </ImageBackground>
                                
                            </View>
                             <View style={{  flex: 0.9, padding: 30, }}>
                             <Dialog
          visible={this.state.visibles}>
          <DialogContent>
            <View style={{ width: 300, height: 110, alignItems: 'center' }}>
              <View style={{ alignItems: 'center', paddingTop: 10 }}>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require("../Assets/successtik.png")} ></Image>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ fontSize: 15, color: '#454976',textAlign: 'center' }}>{this.state.message}</Text>
              </View>
            </View>
          </DialogContent>
        </Dialog>              
<Text style={{ fontSize: 17, color: '#fff',marginBottom:20,fontWeight:'bold'}}>Create Customer</Text>
                            <View style={{  flex: 1,backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20, }} >
  <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginBottom: 20, marginEnd: 30, alignItems: 'center', paddingTop: 10 }}>

<View style={{ alignItems: 'flex-start', width: '80%' }}>
    <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
        onChangeText={(text) => this.setState({ companyname: text })}
        placeholder='company Name' placeholderTextColor='black'
    />
</View>
<View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
    {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Icon---Username.png')} /> */}
</View>
</KeyboardAvoidingView>
                                    
                                

                             

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'space-around' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.setState({ contactperson: text })}
                                            value={this.state.contactperson} 
                                            placeholder='Contact Person' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Shape-111.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>
   <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'space-around' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                             onChangeText={(text) => this.setState({ address: text })}
                                            value={this.state.address}
                                            placeholder='Address' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Shape-111.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>
                                  <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                           onChangeText={(text) => this.setState({ mobileno: text })} keyboardType={'numeric'} maxLength={10}
                                            placeholder='Mobile No' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-12.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>

                      <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.setState({ phone_number: text })} keyboardType={'numeric'} maxLength={10}
                                            placeholder='Alter No' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-12.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>
                                                      <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.setState({ email: text })}  maxLength={10}
                                            placeholder='Email address' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-12.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>
                            </View>

               <View >
                    <TouchableOpacity style={{ paddingTop: 35, paddingLeft: 25, paddingRight: 25, paddingBottom: 10,justifyContent:'flex-end' }} onPress={() => this.CreateCustomer()}>
                      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', }}>
                        {/* <Image source={require('../Assets/Shape-1.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                        <Text style={{ color: 'white' }}>Create Customer</Text>
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