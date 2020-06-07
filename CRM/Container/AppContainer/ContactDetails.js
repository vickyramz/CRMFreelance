//This is an example code to set Backgroud image///
import React, { useState, useEffect ,useRef} from 'react';
//import react in our code. 
import { View, Text,Dimensions,TouchableOpacity,TextInput,ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';
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
import AnimatedLoader from "react-native-animated-loader";
let InitialData=[]
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;

const ContactDetails =(props)=> {
  
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
  useEffect(()=>{
    getData()
  },[])

 const getData =()=>{
   let contactObjects= ContactOperation.ContactListResponse.records.find(element=>element.contact_id===item.id)
   console.log('contactObjects',ContactOperation.ContactListResponse.records)
    setcontactDetails(contactObjects)
 }
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
        <Header style={{ backgroundColor: '#00A3E0', alignItems: 'center', justifyContent: 'center' }}>
             <Left style={{ flexDirection: 'row' }}>
             <TouchableOpacity onPress={()=>goback()}>
             <Image 
            
            source={require('../Assets/back.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'#fff'}}
          />
          </TouchableOpacity>
            
              </Left>
             <Body >
                <Text style={{fontWeight:'bold',fontSize:14,color:'#fff'}} >Contacts Details</Text>
            </Body>
           <Right>
           <TouchableOpacity onPress={()=>EditContacts()}>
           <Text style={{fontWeight:'bold',fontSize:14,color:'#fff'}} >Edit Contact</Text>
          </TouchableOpacity>
           </Right>
        </Header>
      <View style={{ flex: 1 }}>
         
          <View style={{flex:0.4,backgroundColor:'#eaf0f7',justifyContent:'center',alignItems:'center'}}>
      
        <View style={{width:140,height:140,borderRadius:70,backgroundColor:'#00A3E0',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#fff',fontSize:29,fontWeight:'bold'}}>{contactObject.contact_first_name?contactObject.contact_first_name.charAt(0):''}</Text>
        </View>
      
   
          </View>
          <ScrollView style={{flex:0.6,backgroundColor:'#eaf0f7'}}>
          <View style={{flex:1,borderWidth:0,borderTopLeftRadius:50,borderTopRightRadius:50,borderColor:'#F5F5F5',backgroundColor:'#00A3E0',padding:10,elevation
        :4,}}>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>First Name</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.contact_first_name?contactObject.contact_first_name:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Middle Name</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.contact_middle_name?contactObject.contact_middle_name:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Last Name</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.contact_last_name?contactObject.contact_last_name:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Company Name</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.company_name?contactObject.company_name:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Designation</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.designation?contactObject.designation:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Email</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.email?contactObject.email:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Alternate Email</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.alternate_email?contactObject.alternate_email:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Phone</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.phone?contactObject.phone:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Alternate Phone</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.alternate_phone?contactObject.alternate_phone:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Address Line 1</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.address_line_1?contactObject.address_line_1:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Address Line 2</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.address_line_2?contactObject.address_line_2:''}</Text>
              </View>
              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>City</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.city?contactObject.city:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>State</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.state?contactObject.state:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Country</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.country?contactObject.country:''}</Text>
              </View>

              <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>Pincode</Text>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{contactObject.pincode?contactObject.pincode:''}</Text>
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
export default ContactDetails
