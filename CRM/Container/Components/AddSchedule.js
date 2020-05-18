//This is an example code to set Backgroud image///
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text,Dimensions,TextInput, StyleSheet ,TouchableOpacity,ScrollView,Animated,ActivityIndicator} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import * as BindActions from '../Redux/Actions';
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
const AddSchedule =(props)=> {

      

 const onSelectedItemsChange = selectedItems => {
    setState({ selectedItems });
  };
  const navigate=()=>{
    props.onShut()
    props.props.navigation.navigate('SearchUser')
  }
  const loginOperation = useSelector(state => state.userReducer);
  const SavedDataReducer = useSelector(state => state.SavedDataReducer);
  const AddMeetingsReducer = useSelector(state=>state.AddMeetingsReducer);

  const [Organizer,setOrganizer]=useState(SavedDataReducer &&  SavedDataReducer.SelecteData && SavedDataReducer.SelecteData.length>0?SavedDataReducer.SelecteData[0].name:"")
  const [Title,setTitle]=useState()
  const [Des,setDes]=useState()
  const [startDate,setstart]=useState()
  const [startTime,setstartTime]=useState('');
  const [EndTime,setEndTime]=useState('')
  const [EndDate,setEnd]=useState()
  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const [error, setError] = useState('');
  const[attendee,setAttendee]=useState(SavedDataReducer && SavedDataReducer.SelecteData && SavedDataReducer.SelecteData.length>0?SavedDataReducer.SelecteData[0].name:"")
  let _visibility=new Animated.Value(1);
  const dispatch = useDispatch();
  function AddMeetings(){
    console.log('startDate',startDate)
    if(startDate===undefined){
      alert('please select start date')
    }
    else if(EndDate===undefined){
      alert('plase select end date')
    }
    else if(Title===undefined){
      alert('plase select Title')
    }
    else {
      var dtstr = startDate;
      var dtstrEndDate = EndDate;
      var timestampFrom= new Date(dtstr.split("-").reverse().join("-")).getTime();
       var timestampto = Date.parse(dtstrEndDate.split('-').reverse().join('-'));
       let params={
         
           attendees: [23],
         from_date: timestampFrom,
         schedule_description: Des,
         schedule_from_date: startDate,
         schedule_from_time: startTime,
         schedule_title: Title,
         schedule_to_date: EndDate,
         schedule_to_time: EndTime,
         status: "",
         to_date: timestampto
         
       }
       let token=loginOperation.loginResponse.token;
       console.log('meeting input',params)
       dispatch(BindActions.AddMeetings(params,token,'/reports/schedule'));
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
    props.Successs(AddMeetingsReducer.AddMeetingsResponse.message)
   
  }
  if (AddMeetingsReducer.IsAddMeetingsError) {
    AddMeetingsReducer.IsAddMeetingsError=false
    setLoading(false)
    setAlerts(true);
    setError(AddMeetingsReducer.AddMeetingserror.message)
  
  }
  const animation=()=>{
   
    Animated.timing(_visibility, {
        toValue:dataSource.length>0?1:0,
        duration: 200,
        useNativeDriver:true
      }).start();
  }
  if (loader) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
    return (
      <ScrollView style={{ flex: 1}}>
      <View style={{ flex: 1 ,padding:20}}>
        <View >
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Title</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <TextInput
            placeholder='Event Title'
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setTitle(text)}
        value={Title}
      />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Organizer</Text>
           
          </View>
            <View style={{}}>
            <TextInput
            placeholder='organizer'
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setOrganizer(text)}
        value={Organizer}
      />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Description</Text>
          </View>
          <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Description"
      placeholderTextColor="grey"
      onChangeText={(text) => setDes(text)}
      value={Des}
      numberOfLines={10}
      multiline={true}
    />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>start date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={startDate}
        mode="date"
        placeholder="start date"
        format="DD-MM-YYYY"
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
        onDateChange={(date) =>setstart(date)}
      />
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>start Time</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={startTime}
        mode="time"
        placeholder="start Time"
        format="HH:mm:ss"
       
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
        onDateChange={(date) =>setstartTime(date)}
      />
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>End date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={EndDate}
        mode="date"
        placeholder="End date"
        format="DD-MM-YYYY"
        minDate={startDate}
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
        onDateChange={(date) => setEnd(date)}
      />
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>End Time</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={EndTime}
        mode="time"
        placeholder="End Time"
        format="HH:mm:ss "
        minDate={EndTime}
        maxDate="2030-06-01"
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
        onDateChange={(date) => setEndTime(date)}
      />
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Attendees</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
       
        <View>
          <TouchableOpacity onPress={()=>navigate()}>
          <View style={{}}>
            <TextInput
            editable={false}
            placeholder='choose attendees'
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setAttendee(text)}
       value={attendee}
      />
         
          </View>
          </TouchableOpacity>
    
        </View>
       
      </View>
      <TouchableOpacity onPress={()=>AddMeetings()}>
   <Animated.View style={{backgroundColor:'#FA7B5F',height:40,justifyContent:'center',alignItems:'center',
      transform: [
        {
          translateY: _visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0],
          }),
        },
      ],}}>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Save</Text>

      </Animated.View>
   </TouchableOpacity>
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
      textArea: {
        height: 100,
        justifyContent: "flex-start"
      }
  });
  export default AddSchedule;

