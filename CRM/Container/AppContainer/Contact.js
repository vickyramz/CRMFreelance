//This is an example code to set Backgroud image///
import React, { useState, useEffect ,useRef} from 'react';
//import react in our code. 
import { View, Text,Dimensions,TouchableOpacity,TextInput, SafeAreaView, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import RBSheet from "react-native-raw-bottom-sheet";
import * as BindActions from '../Redux/Actions';
import Filter from '../Components/Filter'
let InitialData=[]
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;

const Contact =(props)=> {
  
const RBSheets= useRef()
 const navigate=()=>{
    props.navigation.navigate('AddContacts')
  }
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(false);
  const [success,AddResponses]=useState()
  const [ShowAlert, setAlerts] = useState(false);
  const [error, setError] = useState('');
  const [ContactList,setContactList]=useState([]);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const ContactOperation = useSelector(state => state.ContactReducer);
  const loginOperation = useSelector(state => state.userReducer);
  const AddResponse = useSelector(state => state.AddLeadReducer);
  useEffect(()=>{
    getContactData()
  },[AddResponse])
  if (ContactOperation.IsContactListResponsePending) {
    ContactOperation.IsContactListResponsePending=false
      setLoading(true)
      setAlerts(false);
  }

   if (ContactOperation.IsContactListResponseSuccess) {
    console.log('LeadOperation',ContactOperation)
    ContactOperation.IsContactListResponseSuccess=false
    setLoading(false)
    setAlerts(false);
    let contactArray=[]

    ContactOperation.ContactListResponse.records.map((item,index)=>{
      let contactObj={
        id:item.contact_id,
        name:item.contact_first_name+" "+item.contact_middle_name+item.contact_last_name,
        company:item.company_name
      }
      contactArray.push(contactObj);
      
    })
    InitialData=contactArray;
    setContactList(contactArray)
  }
  if (ContactOperation.IsContactListResponseError) {
    ContactOperation.IsContactListResponseError=false
    setLoading(false)
    setAlerts(true);
    setError(ContactOperation.Contacterror.message)
  
  }
  function getContactData(){
    let params={
     page:1,
     count:10000,
     contactId:'',
     assignee:'',
     stage:'',
     contact_person:'',
     phone:'',
     email :'',
     created_date:'',
     from_date:'',
     to_date:''
    }
    let token=loginOperation.loginResponse.token;
    console.log('token',token)
    dispatch(BindActions.ContactApi(params,token,"/settings/contacts"));
  }
 const keyExtractor =(item)=> {
    return item.id;
  }
 const renderItem =({item})=> {

    return (
      //onPress={(item)=>setState({CountryId:item.countryCode})
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


  const openFilter=()=>{
    RBSheets.current.open();
  }
  const close=()=>{
    RBSheets.current.close();
  }
  const Logout=()=>{
    props.navigation.navigate('Auth')
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

    return (
      <SafeAreaView style={{flex:1}}>
        <Header style={{ backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' }}>
             <Left style={{ flexDirection: 'row' }}>
               <TouchableOpacity onPress={()=>openFilter()}>
               <Image 
            source={require('../Assets/filter.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'gray'}}
          />
               </TouchableOpacity>
            
              </Left>
             <Body >
                <Text style={{fontWeight:'bold',fontSize:18}} >Contacts</Text>
            </Body>
           <Right>
           <TouchableOpacity onPress={()=>Logout()}>
           <Image 
            source={require('../Assets/logout.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'gray'}}
          />
          </TouchableOpacity>
           </Right>
        </Header>
      <View style={{ flex: 1 }}>
         
            <View style={{paddingHorizontal:20}}>
            <View style={styles.SectionStyle}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Contacts"
            onChangeText={text => onChangeText(text)}
            underlineColorAndroid="transparent"
          />
        </View>
            </View>
                <View style={{height:40,backgroundColor:'#f3f3f3',justifyContent:'center',marginTop:10}}>
                <TouchableOpacity onPress={()=>navigate()}>
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
                {ContactList && ContactList.length>0? <View style={{flex:1}}><AlphaScrollFlatList
         scrollBarContainerStyle={{flex:1}}
         data={ContactList}
         keyExtractor={(item)=>keyExtractor(item)}
         //data={state.dataSource}
         renderItem={(item)=>renderItem(item)}
         scrollKey={'name'}
         reverse={false}
         itemHeight={ITEM_HEIGHT}
       /></View> :null}
               
          
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
export default Contact
