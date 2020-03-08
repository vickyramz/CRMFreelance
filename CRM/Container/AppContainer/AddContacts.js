//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,TextInput, ImageBackground, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
export default class Contact extends React.Component {
    static navigationOptions = () => {
        return {
          header: null,
        }
      }
      
  constructor(props){
    super(props);
    this.arrayholder = [];
    this.state={EmailAddress:'',Password:'',
    dataSource:[],}
  }



  keyExtractor (item) {
    return item.id;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.08}}>
            <View style={{padding:20,flexDirection:'row'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Assets/back.png')} style={{width:20,height:20,resizeMode:'contain'}}></Image>
                </View>
                <View style={{paddingLeft:10}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Add Contacts</Text>
                </View>
            </View>
            
            
            </View>
            <View style={{flex:0.92}}>
               
                
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
  searchIcon: {
    padding: 10,
    width:30,
    height:30,
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 10,
    tintColor:'#858585',
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderWidth: 0.1,
    borderColor: '#000',
    borderRadius:30,
    height: 40,
    
    margin: 10,
  },
  itemTitle: {   
    color: '#4e649f',
    padding: 5,marginLeft:20
  },
  itemContainer: {
    width: WIDTH,
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
});
