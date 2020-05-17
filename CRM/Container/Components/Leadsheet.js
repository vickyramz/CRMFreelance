
import { View, Text,Dimensions,ActivityIndicator,Image, StyleSheet ,TouchableOpacity} from 'react-native';
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import { Chevron, Heart, Triangle } from 'react-native-shapes'
import * as BindActions from '../Redux/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RNPickerSelect from 'react-native-picker-select';
const workout = {key:'workout', color: 'green'};

const  Leadsheet =(props)=>  {
   
   const [selectedItems,setItems]=useState('')
const  onSelectedItemsChange = selectedItems => {
  setItems(selectedItems)
  };

  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const [error, setError] = useState('');
  const loginOperation = useSelector(state => state.userReducer);
  const LeadConverterOperation=useSelector(state=>state.LeadConvertReducer)
  const dispatch = useDispatch();
 
  function LeadConvert(e){
    let url=`/leads/status/${props.leadId}` 
    let params={
      status:e    
    }
    let token=loginOperation.loginResponse.token;

    console.log('url format',params)
    dispatch(BindActions.LeadConvert(params,token,url))
  }
  console.log('LeadConverterOperation',LeadConverterOperation)
  if (LeadConverterOperation.LeadConverterPending) {
    LeadConverterOperation.LeadConverterPending=false
      setLoading(true)
      setAlerts(false);
  }
   if (LeadConverterOperation.LeadConverterSuccess) {
    LeadConverterOperation.LeadConverterSuccess=false
    setLoading(false)
    setAlerts(false);
   
    
    props.onShut()
    props.Successs(LeadConverterOperation.LeadConverterResponse.message)
   // console.log('LeadConverterOperation',LeadConverterOperation)
   // setLeadConverterList(LeadConverterOperation.LeadConverterResponse)
  }
  if (LeadConverterOperation.IsLeadConverterError) {
    LeadConverterOperation.IsLeadConverterError=false
    setLoading(false)
    setAlerts(true);
    setError(LeadConverterOperation.LeadConvertererror.message) 
  
  }
  if (loader) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
    return (
      <View style={{ flex: 1 ,padding:20}}>

        {props.tabText==='enquiry'? <View style={{marginLeft:20}}>
          <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('lead')}>
          <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Lead</Text>
          </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('dropped')}>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Enquiry</Text>
        </TouchableOpacity>
        </View>:null}

        {props.tabText==='lead'? <View style={{marginLeft:20}}>
        <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('prospect')}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Prospect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('dropped')}>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Lead</Text></TouchableOpacity>
        </View>:null}
       
        {props.tabText==='prospect'? <View style={{marginLeft:20}}>
        <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('deal')}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Deal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('dropped')}>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Prospect</Text></TouchableOpacity>
        </View>:null}

        {props.tabText==='deal'? <View style={{marginLeft:20}}>
        <TouchableOpacity style={{padding:10}} onPress={()=>LeadConvert('dropped')}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Drop deals</Text>
        </TouchableOpacity>
        </View>:null}
   
        {props.tabText==='dropped'? <View style={{marginLeft:20}}>
        <Text style={{ fontSize: 16, color: 'red',fontWeight:'bold'  }}>Delete</Text>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Reopen</Text>
        </View>:null}
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
  export default Leadsheet;

