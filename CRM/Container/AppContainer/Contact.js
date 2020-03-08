//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,TextInput, ImageBackground, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import RBSheet from "react-native-raw-bottom-sheet";
import Filter from '../Components/Filter'
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
    dataSource:[],
    data: [
        {
          "id": "0",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "1",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
        {
          "id": "2",
          "name": "Dotson Ortiz",
          "company": "CYTREX"
        },
        {
          "id": "3",
          "name": "Hall Nguyen",
          "company": "ENTROFLEX"
        },
        {
          "id": "4",
          "name": "Estrada Armstrong",
          "company": "BOILICON"
        },
        {
          "id": "5",
          "name": "Josie Harmon",
          "company": "RODEMCO"
        },
        {
          "id": "6",
          "name": "Sondra Stevenson",
          "company": "OHMNET"
        },
        {
          "id": "7",
          "name": "Booker Trevino",
          "company": "OCEANICA"
        },
        {
          "id": "8",
          "name": "Lilly Luna",
          "company": "INCUBUS"
        },
        {
          "id": "9",
          "name": "Bird Landry",
          "company": "ELECTONIC"
        },
        {
          "id": "10",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "11",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
      
       
      ],}
  }
  navigate=()=>{
    this.props.navigation.navigate('AddContacts')
  }
  renderItem ({item}) {

    return (
      //onPress={(item)=>this.setState({CountryId:item.countryCode})
      <TouchableOpacity style={{flexDirection:'row',padding:5}}>
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#cdcdcd',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:12,fontWeight:'bold'}}>{item.name.charAt(0)}</Text>
        </View>
         <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
    
      </View>
      </TouchableOpacity>
     
    );
  }

  keyExtractor (item) {
    return item.id;
  }
  openFilter=()=>{
    this.RBSheet.open();
  }
  close=()=>{
    this.RBSheet.close();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.2 }}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{padding:20}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Contacts</Text>
            </View>
            <TouchableOpacity onPress={()=>this.openFilter()}>
            <View style={{padding:20,
            backgroundColor:'#366af1',
            borderBottomLeftRadius:30, 
            justifyContent:'center',
            alignItems:'center'}}>
            <Image 
            source={require('../Assets/filter.png')}
            style={{width:30,height:30,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            </TouchableOpacity>
           
          </View>
            
            <View style={{paddingHorizontal:20}}>
            <View style={styles.SectionStyle}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Contacts"
            underlineColorAndroid="transparent"
          />
        </View>
            </View>
            
            </View>
            <View style={{flex:0.8}}>
                <View style={{height:40,backgroundColor:'#f3f3f3',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>this.navigate()}>
                    <View style={{paddingHorizontal:40,flexDirection:'row'}}>
                     
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
            source={require('../Assets/more.png')}
            style={{width:15,height:15,resizeMode:'contain',tintColor:'#f39a3e'}}
          />
                        </View>
                  
                       
                  
          <Text style={{color:'#f39a3e',fontWeight:'bold',fontSize:16,paddingHorizontal:10}}>Add Contacts</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <AlphaScrollFlatList
          keyExtractor={this.keyExtractor.bind(this)}
          data={this.state.data}
          //data={this.state.dataSource}
          renderItem={this.renderItem.bind(this)}
          scrollKey={'id'}
          reverse={false}
          itemHeight={ITEM_HEIGHT}
        />  
            </View>
           <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={600}
          duration={250}
          customStyles={{
            container: {
            
            }
          }}
        >
          <Filter onShut={()=>this.close()} props={this.props} />
        </RBSheet>
         
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
