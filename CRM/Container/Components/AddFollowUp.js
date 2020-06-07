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
import AnimatedLoader from "react-native-animated-loader";
const ITEM_HEIGHT = 50;
let countryList={};
let StateList=[]
let callStatus=['Call picked','not reachable','Call diverted','not picked','not available']
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RNPickerSelect from 'react-native-picker-select';
const workout = {key:'workout', color: 'green'};

const AddFollowUp =(props) =>  {
  const placeholder = {
    label: 'Select Contact',
    value: null,
    color: '#000',
  };
  const loginOperation = useSelector(state => state.userReducer);
  const AddResponse = useSelector(state => state.AddLeadReducer);
  const CountryReducer= useSelector(state=>state.CountryReducer)
  const navigate=()=>{
     props.onShut()
    props.props.navigation.navigate('SearchUser')
  }
  useEffect(()=>{
   CountryData()
 },[])
  const dispatch = useDispatch();

const [Comments,setComments]=useState('')
const [followTime,setFollowTime]=useState('')
const [Reason,setReason]=useState('')
const [LeadId,setLeadId]=useState()

const AddMeetingsReducer = useSelector(state=>state.AddMeetingsReducer);


  const[firstName,setFirstName]=useState()
  const[lastName,setlastName]=useState()
  const[companyName,setcompanyName]=useState()
  const[contactPerson,setContactperson]=useState()
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
  const getOtherData = (data) =>    {
  
    if(data!=null){
        console.log('data',data)
        console.log('props.LeadList',props.LeadList)
    let arrayObject=  props.LeadList.find(x => x.contact_id === data);
    console.log('lead_id',arrayObject.lead_id)
    setLeadId(arrayObject.lead_id)

    

    }

  }
  if (AddMeetingsReducer.AddMeetingsPending) {
    AddMeetingsReducer.AddMeetingsPending=false
      setLoading(true)
      setAlerts(false);
  }
  console.log('AddResponse',AddMeetingsReducer)
   if (AddMeetingsReducer.AddMeetingsSuccess) { 
    AddMeetingsReducer.AddMeetingsSuccess=false
    setLoading(false)
    setAlerts(false);
    props.onShut()
    props.Success(AddMeetingsReducer.AddMeetingsResponse.message)
   
  }
  if (AddMeetingsReducer.IsAddMeetingsError) {
    AddMeetingsReducer.IsAddMeetingsError=false
    setLoading(false)
   // setAlerts(true);
    //setError(AddMeetingsReducer.AddMeetingserror.message)
  
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
    setCountry(old=>[...old,...contryDetails])
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
    setReason(item)

  }
  function CountryData(){
    let token=loginOperation.loginResponse.token;
    let url = '/settings/cities_list'
    dispatch(BindActions.GetCountryList(token,url))
  }
  function AddFollow(){
    console.log('startDate',Followdate)
    if(Followdate===undefined){
      alert('please select Follow date')
    }
    else if(Comments===undefined){
      alert('plase select Comments')
    }
    else if(LeadId===undefined){
      alert('plase select Enquiry')
    }
    else {
       let params={
         
           follow_up_date: Followdate+followTime,
           followup_comments: Comments,
           followup_date: Followdate,
           followup_hours: 0,
           followup_mins: 0,
           followup_status: "26",
           followup_time: 720,
           selectedLeadId: LeadId
         
       }
       let token=loginOperation.loginResponse.token;
       console.log('meeting input',params)
       dispatch(BindActions.AddMeetings(params,token,`/leads/followups/${LeadId}`));
    }

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
      <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../Assets/9192-loader.json")}
      animationStyle={styles.lottie}
      speed={1}/>
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
            <Text style={{ fontSize: 16, color: '#000',  }}>Enquiry</Text>
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
            <Text style={{ fontSize: 16, color: '#000',  }}>Call Status</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             value={Reason}
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
            items={getCountry(callStatus)}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
     

        
         
    
        
         
     
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Next Followup date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={Followdate}
        mode="date"
        placeholder="Choose date"
        format="YYYY-MM-DD"
        minDate="1995-05-01"
        maxDate="2050-06-01"
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

      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Next Followup Time</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={followTime}
        mode="time"
        placeholder="Choose date"
        format="HH:mm:ss"
        minDate="01-05-1995"
        maxDate="01-06-2050"
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
        onDateChange={(date) => setFollowTime(date)}
      />
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Comments</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Comments'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setComments(text)}
        value={Comments}
      />
  </View>
        
         
      </View>
      <TouchableOpacity onPress={()=>AddFollow()}>
      <View style={{backgroundColor:'#f39a3e',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Update</Text>
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
  export default AddFollowUp;

