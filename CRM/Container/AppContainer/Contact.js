//This is an example code to set Backgroud image///
import React, { useState, useEffect ,useRef,useReducer} from 'react';
//import react in our code. 
import { View, Text,Dimensions,TouchableOpacity,ActivityIndicator,TextInput, SafeAreaView, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 
import SplashScreen from 'react-native-splash-screen'
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import RBSheet from "react-native-raw-bottom-sheet";
import * as BindActions from '../Redux/Actions';
import Filter from '../Components/Filter'
import loginReducer from '../Redux/Reducer/loginReducer'
import AnimatedLoader from "react-native-animated-loader";
import ContactDetails from './ContactDetails';
let InitialData=[]
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;

const Contact =(props)=> {
  
const RBSheets= useRef()
 const navigate=()=>{
    props.navigation.navigate('AddContacts')
  }
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(true);
  const [LogoutResponse,dispatchlogout]=useReducer(loginReducer.userLoginReducer,{})
  const [success,AddResponses]=useState()
  const [ShowAlert, setAlerts] = useState(false);
  const [error, setError] = useState('');
  const [page,setPage]=useState(1)
  const [ContactList,setContactList]=useState([]);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const ContactOperation = useSelector(state => state.ContactReducer);
  const loginOperation = useSelector(state => state.userReducer);
  const AddResponse = useSelector(state => state.AddContactReducer);
  const ContactReducer= useSelector(state=>state.ContactGroupReducer)
  const EditReducer= useSelector(state=>state.EditReducer)

  useEffect(()=>{
    setPage(1)
    setContactList([]);
    getContactData();
    ContactGroup();
  },[AddResponse,EditReducer])
  const ContactGroup=()=>{
    let token=loginOperation.loginResponse.token;
    let url = '/settings/contacts/group'
    dispatch(BindActions.ContactGroupApi(token,url))
    }
  if (ContactOperation.IsContactListResponsePending) {
    ContactOperation.IsContactListResponsePending=false
      //setLoading(true)
      setAlerts(false);
  }
  //Contact Group
  console.log('ContactReducer',ContactReducer)
  if(ContactReducer.IsContactGroupListResponsePending){
    ContactReducer.IsContactGroupListResponsePending=false
   // setLoading(true)
  }
  if(ContactReducer.IsContactGroupListResponseSuccess){
    ContactReducer.IsContactGroupListResponseSuccess=false
    setLoading(false)
  }
  if(ContactReducer.IsContactGroupListResponseError){
    ContactReducer.IsContactGroupListResponseError=false
    setLoading(false)
   setAlerts(true)
   setError(ContactReducer.ContactGrouperror)
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
    setContactList([...ContactList,...contactArray])
  }
  if (ContactOperation.IsContactListResponseError) {
    ContactOperation.IsContactListResponseError=false
    setLoading(false)
    setAlerts(true);
    setError(ContactOperation.Contacterror.message)
  
  }
  function loadMoreData(){
    setPage(page+1)
    getContactData()
    
  }
  function renderFooter() {
    return (
    //Footer View with Load More button
      <View style={styles.footer}>
      
      <ActivityIndicator color="#000" size='large' style={{ marginLeft: 8 }} />
      
      </View>
    );
  }
  function getContactData(){
    console.log('Again coming with reload')
    let params={
     page:page,
     count:10,
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
  const ContactDetails=(item)=>{
    props.navigation.navigate('ContactDetails',{item:item})
  }
 const renderItem =({item})=> {

    return (
      //onPress={(item)=>setState({CountryId:item.countryCode})
      <TouchableOpacity onPress={()=>ContactDetails(item)} style={{flexDirection:'row',padding:5}}>
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#F5F5F5',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#00A3E0',fontSize:12,fontWeight:'bold'}}>{item.name.charAt(0)}</Text>
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
    dispatch(BindActions.logout())
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
        <Header style={{ backgroundColor: '#00A3E0', alignItems: 'center', justifyContent: 'center' }}>
             <Left style={{ flexDirection: 'row' }}>
               <TouchableOpacity onPress={()=>openFilter()}>
               <Image 
            source={require('../Assets/filter.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'#fff'}}
          />
               </TouchableOpacity>
            
              </Left>
             <Body >
                <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}} >Contacts</Text>
            </Body>
           <Right>
           <TouchableOpacity onPress={()=>Logout()}>
           <Image 
            source={require('../Assets/logout.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'#fff'}}
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
         onEndReached={loadMoreData}
         onEndReachedThreshold ={0.2}
         ListFooterComponent={renderFooter}
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
        <AnimatedLoader
        visible={loader}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../Assets/9192-loader.json")}
        animationStyle={styles.lottie}
        speed={1}/>
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
    color: '#000',
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
