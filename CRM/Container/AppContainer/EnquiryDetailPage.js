//This is an example code to set Backgroud image///
import React, { useState, useEffect ,useRef} from 'react';
//import react in our code. 
import { View, Text,Dimensions,TouchableOpacity,ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import RBSheet from "react-native-raw-bottom-sheet";
import * as BindActions from '../Redux/Actions';
import Filter from '../Components/Filter'
import EditContacts from './EditContacts';
let InitialData=[]
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;

const EnquiryDetailPage =(props)=> {
  
const RBSheets= useRef()
 const navigate=()=>{
    props.navigation.navigate('AddContacts')
  }
  const item=props.navigation.state.params.item;
  console.log('Item',item)
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(false);
  const [success,AddResponses]=useState()
  const [ShowAlert, setAlerts] = useState(false);
  const [error, setError] = useState('');
  const [ContactList,setContactList]=useState([]);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const ContactOperation = useSelector(state => state.ContactReducer);
  const loginOperation = useSelector(state => state.userReducer);
  const [contactObject,setcontactDetails]=useState({})
  const AddResponse = useSelector(state => state.AddLeadReducer);


 const keyExtractor =(item)=> {
    return item.id;
  }


  const openFilter=()=>{
    RBSheets.current.open();
  }
  const close=()=>{
    RBSheets.current.close();
  }
  const Logout=()=>{
    props.navigation.navigate('Auth')
  }
  const goback=()=>{
    props.navigation.goBack(null);
  }
  const onChangeText=(e)=>{
    let text = e.toLowerCase()
    let trucks = ContactList
    let filteredName = trucks.filter((item) => {
      return item.name.toLowerCase().match(text)
    })
    if (!text || text === '') {
      setContactList(InitialData);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      //setContactList([]);
    } else if (Array.isArray(filteredName)) {
      setContactList(filteredName);
    }
   
   
  }
const EditContacts=()=>{
    props.navigation.navigate('EditContacts',{item:contactObject})
}
    return (
      <SafeAreaView style={{flex:1}}>
        <Header style={{ backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' }}>
             <Left style={{ flexDirection: 'row' }}>
             <TouchableOpacity onPress={()=>goback()}>
             <Image 
            
            source={require('../Assets/back.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'gray'}}
          />
          </TouchableOpacity>
            
              </Left>
             <Body >
                <Text style={{fontWeight:'bold',fontSize:16}} >Details</Text>
            </Body>
           <Right>
        
           </Right>
        </Header>
      <View style={{ flex: 1 }}>
         
          <View style={{flex:0.4,backgroundColor:'#F5F5F5',justifyContent:'center',alignItems:'center'}}>
      
        <View style={{width:120,height:120,borderRadius:60,backgroundColor:'#cdcdcd',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#00A3E0',fontSize:29,fontWeight:'bold'}}>{item.contact_first_name?item.contact_first_name.charAt(0):''}</Text>
        </View>
      
   
          </View>
          <ScrollView style={{flex:0.6,backgroundColor:'#F5F5F5'}}>
          <View style={{flex:1,borderWidth:10,borderTopLeftRadius:50,borderTopRightRadius:50,borderColor:'#F5F5F5',backgroundColor:'#fff',padding:10}}>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>First Name</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.contact_first_name}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Middle Name</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.contact_middle_name}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Last Name</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.contact_last_name}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Company Name</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.company_name}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Designation</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.designation}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Email</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.email}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Alternate Email</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.alternate_email}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Phone</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.phone}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Alternate Phone</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.alternate_phone}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Address Line 1</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.address_line_1}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Address Line 2</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.address_line_2}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>City</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.city?item.city:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>State</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.state?item.state:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Country</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.country?item.country:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>Pincode</Text>
              <Text style={{color:'gray',fontSize:16,fontWeight:'bold'}}>{item.pincode?item.pincode:''}</Text>
              </View>
          </View>
          </ScrollView>
               
          
           <RBSheet
          ref={RBSheets}
          height={600}
          duration={250}
          customStyles={{
            container: {
            
            }
          }}
        >
          <Filter onShut={()=>close()} props={props} />
        </RBSheet>
     <SnackBar
            autoHidingTime={2000}
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText=""
        />
      </View>
      </SafeAreaView>
    );
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
    borderColor: 'gray',
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
export default EnquiryDetailPage
