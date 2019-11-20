import React from "react";
import { View, Text, StyleSheet, Alert, UIManager, Linking, AsyncStorage, Platform, FlatList, LayoutAnimation, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, TouchableHighlight, Dimensions } from "react-native";
var height = Dimensions.get('window').height; //full height
var width = Dimensions.get('window').width; //full height
let uname, firstname, lastName;
import { NavigationActions ,StackActions} from 'react-navigation'
const shareOptions = {
  title: 'Share via',
  url: 'www.google.com',
};

export default class SideMenu extends React.Component {

  static navigationOptions =
    {
      header: null,
    };
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      layoutHeight: 0,
      expand: false,
      status:false,
      ListItems: [

        // {
        //   id: 1,
        //   Title: 'Home',

        // images: require('../Assets/home.png')
        // },
        {
          id: 1,
          Title: 'Auto RSP',

          images: require('../Assets/influencer.png')
        },
        {
          id: 2,
          Title: 'Payment Mode',

          images: require('../Assets/call.png')
        },
        {
          id: 3,
          Title: 'Alarms',

          images: require('../Assets/credit-card.png')
        },
        {
          id: 4,
          Title: 'LogOut',

         // images: require('../Assets/nummenu.png')
        },
      ]
      
    }

  }
  componentDidMount() {
    this.getUserId()
  }

  getUserId = async () => {
    firstname = await AsyncStorage.getItem('firstName');
    lastName = await AsyncStorage.getItem('lastName');
    uname = await AsyncStorage.getItem('authToken');
    console.log('uname', uname)
  }
  call = () => {
    //handler to make a call
    const args = {
      number: "8001180010,9",
      prompt: false,
    };
    call(args).catch(console.error);
  };

  ItemListPress = (item) => {
    console.log('Method trigggered')

    if (item.id == 1) {
      this.props.navigation.navigate('Home')
      //  Alert.alert('Coming Soon','This feature will be available very soon');
    }
    else if (item.id == 2) {
    //  this.call()
     this.props.navigation.navigate('Follow')
      // this.props.navigation.navigate('UsefullNumbers')
    }
    else if (item.id == 3) {
       this.props.navigation.navigate('Enquiry')
     // Share.open(shareOptions).catch((err) => { err && console.log("share error", err); })
    }
    else if (item.id == 4) {
     // this.props.navigation.navigate('UsefullNumbers')
 this.props.navigation.navigate('CardScanner')
    }
    else if (item.id == 5) {
      this.props.navigation.navigate('Signin')

    }
  }


  _renderItemList = ({ item }) => {
    return (

      <TouchableWithoutFeedback onPress={() => this.ItemListPress(item)}>
        <View style={{ padding: 8, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain',tintColor:'#fff' }} source={item.images}></Image>
            </View>
            <View style={{ justifyContent: 'center', width: "70%" }}>
              <Text style={{ color: '#fff', fontSize: 15 }} >{item.Title}</Text>

            </View>

          </View>
        
       
        </View>

      </TouchableWithoutFeedback >

    )
  }




  signin = () => {
    this.props.navigation.navigate('Signin')
  }

  ConfirmLogout = async () => {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.setItem('isLoggedIn', "false");
    this.props.navigation.navigate('Signin')
  }
  ConfirmVisitor = async () => {
    await AsyncStorage.removeItem('authToken');
    // this.props.navigation.navigate('Membership')
    uname=null
    await AsyncStorage.setItem('isLoggedIn', "false");
    this.setState({status:!this.state.status})
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Homes' })],
    });
    this.props.navigation.dispatch(resetAction);
   
  }
  ClosePopup = () => {
    this.setState({ visibles: false })
  }
  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.MainContainer}>
          <ImageBackground source={require('../Assets/petrol.png')} style={styles.MainContainer}>
      <View style={{flex:0.05}}></View>
            <View style={{ flex: 0.95}}>
            <FlatList
                data={this.state.ListItems}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemList}

              />
                      
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  circle: {
    justifyContent: 'center', alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff'
  },

  text: {

    color: '#fff'
  }

});