//This is an example code to set Backgroud image///
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import * as BindActions from '../Redux/Actions';
import { View, Text,Dimensions,TextInput,Image,ActivityIndicator, StyleSheet ,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import { Chevron, Heart, Triangle } from 'react-native-shapes'
let contryDetails=[]
import Icon from 'react-native-vector-icons/FontAwesome';
const ITEM_HEIGHT = 50;
let countryList={};
let StateList=[]
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RNPickerSelect from 'react-native-picker-select';
const workout = {key:'workout', color: 'green'};

const AddContact =(props) =>  {
  const placeholder = {
    label: 'Select Contact',
    value: null,
    color: '#000',
  };
  const loginOperation = useSelector(state => state.userReducer);
  const AddResponse = useSelector(state => state.AddLeadReducer);
  const CountryReducer= useSelector(state=>state.CountryReducer)
  const ContactReducer= useSelector(state=>state.ContactGroupReducer)
  const navigate=()=>{
     props.onShut()
    props.props.navigation.navigate('SearchUser')
  }
  useEffect(()=>{
   CountryData();
   ContactGroup();
 },[])
  const dispatch = useDispatch();
  const[firstName,setFirstName]=useState()
  const[lastName,setlastName]=useState()
  const[companyName,setcompanyName]=useState()
  const[contactPerson,setContactperson]=useState()
  const [ContactGroupList,setContactGroup]=useState([])
  const[States,SetStates]=useState([])
  const[Phone,setPhone]=useState()
  const[AlternatePhone,setalternatePhone]=useState()
  const[email,setMail]=useState()
  const[Alternateemail,setAlternateMail]=useState()
  const[country,setCountry]=useState([])
  const[city,setCity]=useState()
  const[contactId,setContactid]=useState();
  const[state,setState]=useState()
  const [success,AddResponses]=useState()
  const [postalCode,setPostalCode]=useState()
  const [Followdate,setFollowDate]=useState()
  const [assignTo,setAssignTo]=useState()
  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [AddressLine1,setAddressLine1]=useState()
  const [AddressLine2,setAddressLine2]=useState()
  let token=loginOperation.loginResponse.token;

  console.log('CountryReduce',CountryReducer)
  if(CountryReducer.IsCountryListResponsePending){
    CountryReducer.IsCountryListResponsePending=false
    setLoading(true)
  }
  if(CountryReducer.IsCountryListResponseSuccess){
    CountryReducer.IsCountryListResponseSuccess=false
    setLoading(false)
     contryDetails=Object.keys(CountryReducer.CountryListResponse)
     countryList=CountryReducer.CountryListResponse
    console.log('CountryReducer.CountryListResponse',contryDetails)
    setCountry(old=>[...old,...contryDetails])
  }
  if(CountryReducer.IsCountryListResponseError){
    CountryReducer.IsCountryListResponseError=false
    setLoading(false)
   // let contryDetails=Object.keys(CountryReducer.IsCountryListResponseSuccess)
   setAlerts(true)
   setError(CountryReducer.Countryerror)
  }

  //Contact Group
  console.log('ContactReducer',ContactReducer)
  if(ContactReducer.IsContactGroupListResponsePending){
    ContactReducer.IsContactGroupListResponsePending=false
    setLoading(true)
  }
  if(ContactReducer.IsContactGroupListResponseSuccess){
    ContactReducer.IsContactGroupListResponseSuccess=false
    setLoading(false)
    setContactGroup(ContactReducer.ContactGroupListResponse)
  }
  if(ContactReducer.IsContactGroupListResponseError){
    ContactReducer.IsContactGroupListResponseError=false
    setLoading(false)
   // let contryDetails=Object.keys(CountryReducer.IsCountryListResponseSuccess)
   setAlerts(true)
   setError(ContactReducer.ContactGrouperror)
  }

  const getCountry=(data)=>{
    console.log('data',data)
    let arrayData=[]
    if(data.length>0){
      data.map((item,index)=>{
        let arrayObject={label:item,value:item}
        arrayData.push(arrayObject);
      })
      return arrayData;
    }
    return [];
   
  }
  const getContact=(data)=>{
    console.log('data',data)
    let arrayData=[]
    if(data.length>0){
      data.map((item,index)=>{
        let arrayObject={label:item.group_name,value:item.contact_group_id}
        arrayData.push(arrayObject);
      })
      return arrayData;
    }
    return [];
   
  }
 const ContactGroup=()=>{
  let token=loginOperation.loginResponse.token;
  let url = '/settings/contacts/group'
  dispatch(BindActions.ContactGroupApi(token,url))
  }
  const getStates=()=>{
    console.log('data',)
    let arrayData=[]
    if(StateList.length>0){
      StateList.map((item,index)=>{
        let arrayObject={label:item,value:item}
        arrayData.push(arrayObject);
      })
      return arrayData;
    }
    return [];
    
   
  }
  const CountrySelection =(item)=>{
        StateList=Object.keys(countryList[item])
        SetStates(StateList)

  }
  function CountryData(){
    let token=loginOperation.loginResponse.token;
    let url = '/settings/cities_list'
    dispatch(BindActions.GetCountryList(token,url))
  }
  function AddContact(){
 
   if(firstName==null || firstName===''){
      alert('please enter First Name')
    }
   else if(lastName==null || lastName===''){
      alert('please enter lastName Name')
    }
    else if(companyName==null || companyName===''){
      alert('please enter companyName Name')
    }
    else if (email ==null || email ===''){
      alert('please enter email ')
    }
    else if (Phone ==null || Phone ===''){
      alert('please enter phone')
    }
    else{
      let params={
        contact_first_name:firstName,
        contact_middle_name :'',
        contact_last_name:lastName,
        company_name:companyName,
        attachments: [],
   
      email :email,
  alternate_email:Alternateemail,
  phone:Phone,
  alternate_phone :AlternatePhone,
  address_line_1 :AddressLine1,
  address_line_2:AddressLine2,
  city :city,
  state :state,
  country :country,
  pincode :postalCode,
  notes:'',
  designation: "",

      }
      console.log('params',JSON.stringify(params))
      dispatch(BindActions.AddContact(params,token,'/settings/contacts'));
    }
    
  }
  if (AddResponse.AddConatctPending) {
    AddResponse.AddConatctPending=false
      setLoading(true)
      setAlerts(false);
  }
   if (AddResponse.AddContactSuccess) {
    console.log('AddResponse',AddResponse)
    AddResponse.AddContactSuccess=false
    setLoading(false)
    setAlertsSuccess(true);
    AddResponses(AddResponse.AddContactResponse.message)
    setTimeout(()=>props.navigation.goBack(),2000)
  }
  if (AddResponse.IsAddContactError) {
    AddResponse.IsAddContactError=false
    setLoading(false)
    setAlerts(true);
    setError(AddResponse.AddContacterror.message)
  
  }
  const getData = () =>{
    let pickerrray=[]
      props.LeadList.map((item,index)=>{
            let pickObject={
              label:item.contact_first_name+" "+item.contact_last_name,
              value:item.contact_id
            }
            pickerrray.push(pickObject)
      })
      return pickerrray
  }
  if (loader) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
    return (
      <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{paddingBottom:30}} style={{flex:1}}>
        <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1,padding:10 }}
>
   
<View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact Group</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
                value={assignTo}
            onValueChange={(value) => console.log(value)}
            items={getContact(ContactGroupList)}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
     
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>First Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
         onChangeText={(text)=>setFirstName(text)}
            placeholder='First Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
      
        value={firstName}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Last Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
        
            placeholder='Last Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text)=>setlastName(text)}
        value={lastName}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Company Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
         
            placeholder='Company Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text)=>setcompanyName(text)}
        value={companyName}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Industry</Text>
          
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
                value={assignTo}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
     
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Phone </Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <TextInput
            placeholder='Phone '
            keyboardType={'numeric'}
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) =>setPhone(text)}
        value={Phone}
      />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Alternate Phone</Text>
            
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Alternate Phone'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        keyboardType={'name-phone-pad'}
        onChangeText={(text) => setalternatePhone(text)}
        value={AlternatePhone}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}> Email</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Email'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setMail(text)}
        value={email}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Alternate Email</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Alternate Email'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setAlternateMail(text)}
        value={Alternateemail}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Address Line 1</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Address Line 1'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setAddressLine1(text)}
        value={AddressLine1}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Address Line 2</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Address Line 2'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setAddressLine2(text)}
        value={AddressLine2}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Country</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             //value={country}
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => CountrySelection(value)}
            items={getCountry(contryDetails)}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>State</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             value={state}
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={getStates()}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>City</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='City'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setCity(text)}
        value={city}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Postal Code</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Postal code'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setPostalCode(text)}
        value={postalCode}
      />
  </View>
        
         
      </View>
  

      {/* <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Followup date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={Followdate}
        mode="date"
        placeholder="Choose date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            backgroundColor:'#f3f3f3'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setFollowDate(date)}
      />
        
         
      </View> */}
   
  
       
      </KeyboardAvoidingView>
      </ScrollView>
         <TouchableOpacity onPress={()=>AddContact()} >
         <View style={{backgroundColor:'#f39a3e',height:40,justifyContent:'center',alignItems:'center',flexDirection:'row',opacity: 0.8,
         
       }}>
         <View>
         <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Save</Text>
         </View>
       <View style={{paddingLeft:10}}>
    
       </View>
       
   
       </View>
         </TouchableOpacity>
      <TouchableOpacity >
      <View style={{backgroundColor:'#6c757d',height:40,justifyContent:'center',alignItems:'center',flexDirection:'row',opacity: 0.8
         
       }}>
         <View>
         <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Cancel</Text>
         </View>
       <View style={{paddingLeft:10}}>
    
       </View>
       
   
       </View>
      </TouchableOpacity>
      <SnackBar
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText=""
        />
      <SnackBar
         backgroundColor='green'
          visible={ShowAlertSuccess}
          textMessage={success}
          
          actionHandler={() => snackBarActions()}
          actionText=""
        />
      </View>
    );
  }
const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor:'grey',
        borderWidth: 0.1,
        backgroundColor:'#f3f3f3',
        padding: 5
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
      textArea: {
        height: 100,
        justifyContent: "flex-start"
      }
  });
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      backgroundColor:'#f3f3f3',
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  export default AddContact;

