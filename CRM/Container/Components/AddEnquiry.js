//This is an example code to set Backgroud image///
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import * as BindActions from '../Redux/Actions';
import { View, Text,Dimensions,TextInput,Image,ActivityIndicator, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';
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
let LeadId='';
let assignId='';
const AddEnquiry =(props) =>  {
  const placeholder = {
    label: 'Select Contact',
    value: null,
    color: '#000',
  };
  const loginOperation = useSelector(state => state.userReducer);
  const AddResponse = useSelector(state => state.AddLeadReducer);
  const CountryReducer= useSelector(state=>state.CountryReducer);
  const ContactOperation = useSelector(state => state.ContactReducer);
  const LeadsourceReducer=useSelector(state=>state.LeadsourceReducer)
  const AssignTo=useSelector(state=>state.AssignTo)
  const navigate=()=>{
     props.onShut()
    props.props.navigation.navigate('SearchUser')
  }
  useEffect(()=>{
   CountryData()
 },[])
  const dispatch = useDispatch();
  const[firstName,setFirstName]=useState()
  const[lastName,setlastName]=useState()
  const[companyName,setcompanyName]=useState()
  const[contactPerson,setContactperson]=useState()
  const[States,SetStates]=useState([])
  const[Phone,setPhone]=useState()
  const[AlternatePhone,setalternatePhone]=useState()
  const[email,setMail]=useState()
  const[Alternateemail,setAlternateMail]=useState()
  const[selectedCountry,setSelectedCountry]=useState()
  const[AssignToList,setAssignToList]=useState(AssignTo.AssignToResponse &&AssignTo.AssignToResponse.length>0 ? AssignTo.AssignToResponse:[])
  const[LeadSource,setLeadSource]=useState(LeadsourceReducer.LeadSourceResponse && LeadsourceReducer.LeadSourceResponse.length>0 ? LeadsourceReducer.LeadSourceResponse:[])
  const[selectedState,setStates]=useState()
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
  const getOtherData = (data) =>{
  
    if(data!=null){
    let arrayObject=  ContactOperation.ContactListResponse.records.find(x => x.contact_id === data);
    console.log('arrayObject',arrayObject)
    setContactid(data)
    setFirstName(arrayObject && arrayObject.contact_first_name?arrayObject.contact_first_name:'')
    setlastName(arrayObject && arrayObject.contact_last_name?arrayObject.contact_last_name:'')
    setcompanyName(arrayObject && arrayObject.company_name?arrayObject.company_name:'')
    setPhone(arrayObject && arrayObject.phone?arrayObject.phone:'')
    setalternatePhone(arrayObject && arrayObject.alternate_phone?arrayObject.alternate_phone:'')
    setMail(arrayObject && arrayObject.email?arrayObject.email:'')
    setAlternateMail(arrayObject && arrayObject.alternate_email?arrayObject.alternate_email:'')
    setAddressLine1(arrayObject && arrayObject.address_line_1?arrayObject.address_line_1:'')
    setAddressLine2(arrayObject && arrayObject.address_line_2?arrayObject.address_line_2:'')
    setSelectedCountry(arrayObject && arrayObject.country?arrayObject.country:'')
    setCity(arrayObject && arrayObject.city?arrayObject.city:"")
    setStates(arrayObject && arrayObject.state?arrayObject.state:'')
    setPostalCode(arrayObject && arrayObject.pincode?arrayObject.pincode:'')
    setAssignTo(arrayObject && arrayObject.assigned_to?arrayObject.assigned_to:'')
    setState(arrayObject && arrayObject.state?arrayObject.state:'')
   // CountrySelection(arrayObject && arrayObject.country?arrayObject.country:'')
    }
  
  }
  const CountrySelectionInitial =(item)=>{
    console.log('Item',countryList[item])
    if(countryList!=undefined){
      StateList=Object.keys(countryList[item])
      setSelectedCountry(item)
      SetStates(StateList)
    }
  }
  const CountrySelection =(item)=>{
    console.log('Item',countryList[item])
    if(countryList!=undefined){
      setState('')
      StateList=Object.keys(countryList[item])
      setSelectedCountry(item)
      SetStates(StateList)
    }
  }
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
    setCountry(contryDetails)
  }
  if(CountryReducer.IsCountryListResponseError){
    CountryReducer.IsCountryListResponseError=false
    setLoading(false)
   // let contryDetails=Object.keys(CountryReducer.IsCountryListResponseSuccess)
   setAlerts(true)
   setError(CountryReducer.Countryerror)
  }

  const getCountry=(data)=>{
    console.log('data',data)
    let arrayData=[]
    data.map((item,index)=>{
      let arrayObject={label:item,value:item}
      arrayData.push(arrayObject);
    })
    return arrayData;
  }
  const getLeadSource=(data)=>{
    console.log('data',data)
    let arrayData=[]
    data.map((item,index)=>{
      let arrayObject={label:item.source_title,value:item.lead_source_id}
      arrayData.push(arrayObject);
    })
    return arrayData;
  }
  const getAssignTo=(data)=>{
    console.log('data',data)
    let arrayData=[]
    data.map((item,index)=>{
      let arrayObject={label:item.fname+" "+item.lname,value:item.user_id}
      arrayData.push(arrayObject);
    })
    return arrayData;
  }
  function selectedAsignId(id){
    console.log('-------',id)
 assignId=id && id.user_id?id.user_id:''
  }
  function selectedLeadId(id){
   // console.log(id)
    LeadId= id && id.lead_source_id?id.lead_source_id:''
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

  function CountryData(){
    let token=loginOperation.loginResponse.token;
    let url = '/settings/cities_list'
    dispatch(BindActions.GetCountryList(token,url))
  }
  function AddEnquiryAction(){
    if(contactId==null || contactId===''){
      alert('please select contact')
    }
    else if(contactPerson==null || contactPerson===''){
      alert('please enter contact person')
    }
    else if (email ==null || email ===''){
      alert('please enter email')
    }
    else if (Phone ==null || Phone ===''){
      alert('please enter phone')
    }
    else{
      let params={
        contact_id:contactId,
        lead_source_id :LeadId,
      contact_person :contactPerson,
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
  assigned_to:assignId,
      }
      console.log('params',JSON.stringify(params))
      dispatch(BindActions.AddLead(params,token,'/leads'));
    }
    
  }
  if (AddResponse.AddPending) {
    AddResponse.AddPending=false
      setLoading(true)
      setAlerts(false);
  }
   if (AddResponse.AddSuccess) {
    console.log('AddResponse',AddResponse)
    AddResponse.AddSuccess=false
    setLoading(false)
    setAlerts(false);
    props.onShut()
    props.Success('Enquiry Added')
    AddResponses(AddResponse.AddResponse.message)
  }
  if (AddResponse.IsAddError) {
    AddResponse.IsAddError=false
    setLoading(false)
    setAlerts(true);
    setError(AddResponse.Adderror.message)
  
  }
  const getData = () =>{
    let pickerrray=[]
    ContactOperation.ContactListResponse.records.map((item,index)=>{
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
        <ScrollView contentContainerStyle={{paddingBottom:30}} style={{flex:1}}>
      <View style={{ flex: 1 ,padding:20}}>
          <TouchableOpacity onPress={()=>props.onShut()}>
          <View style={{alignSelf:'flex-end'}}>
              <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../Assets/close.png')}></Image>
          </View>
          </TouchableOpacity>
        
        <View >
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
              placeholder={placeholder}
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
            onValueChange={(value) =>getOtherData(value)}
            items={getData()}
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
          editable={false}
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
          editable={false}
            placeholder='Last Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        
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
          editable={false}
            placeholder='Company Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
       
        value={companyName}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact Person</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Contact Person'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setContactperson(text)}
        value={contactPerson}
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
             placeholder={{
              label: selectedCountry?selectedCountry:'',
              value: null,
          }}
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
              placeholder={{
                 label: state?state:'',
                value: null,
            }}
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
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Lead Source</Text>
           
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
            onValueChange={(value) => selectedLeadId(value)}
            items={getLeadSource(LeadSource)}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Assign to</Text>
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
              
            onValueChange={(value) => selectedAsignId(value)}
            items={getAssignTo(AssignToList)}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
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
        
         
      </View>
      <TouchableOpacity onPress={()=>AddEnquiryAction()}>
      <View style={{backgroundColor:'#f39a3e',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Save</Text>
      </View>
    <View style={{paddingLeft:10}}>
 
    </View>
    

    </View>
      </TouchableOpacity>
   <TouchableOpacity onPress={()=>props.onShut()}>
   <View style={{backgroundColor:'#6c757d',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Cancel</Text>
      </View>
    <View style={{paddingLeft:10}}>
 
    </View>
    

    </View>
   </TouchableOpacity>
<SnackBar
            autoHidingTime={2000}
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText=""
        />
       
      </View>
      </ScrollView>
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
  export default AddEnquiry;

