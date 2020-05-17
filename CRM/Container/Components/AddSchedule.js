//This is an example code to set Backgroud image///
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text,Dimensions,TextInput, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'

const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
const 
items = [{
  id: '92iijs7yta',
  name: 'Ondo',
}, {
  id: 'a0s0a8ssbsd',
  name: 'Ogun',
}, {
  id: '16hbajsabsd',
  name: 'Calabar',
}, {
  id: 'nahs75a5sg',
  name: 'Lagos',
}, {
  id: '667atsas',
  name: 'Maiduguri',
}, {
  id: 'hsyasajs',
  name: 'Anambra',
}, {
  id: 'djsjudksjd',
  name: 'Benue',
}, {
  id: 'sdhyaysdj',
  name: 'Kaduna',
}, {
  id: 'suudydjsjd',
  name: 'Abuja',
}];
const AddSchedule =(props)=> {

      

 const onSelectedItemsChange = selectedItems => {
    setState({ selectedItems });
  };
  const navigate=()=>{
    props.onShut()
    props.props.navigation.navigate('SearchUser')
  }

  const [Organizer,setOrganizer]=useState();
  const [Title,setTitle]=useState()
  const [Des,setDes]=useState()
  const [startDate,setstart]=useState()
  const [startTime,setstartTime]=useState('');
  const [EndTime,setEndTime]=useState('')
  const [EndDate,setEnd]=useState()
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
            placeholder='subhashree(Me)'
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
        format="YYYY-MM-DD"
        minDate="1995-05-01"
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
        format="YYYY-MM-DD"
        minDate={startDate}
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
            placeholder='subhashree(Me)'
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setState({text})}
       
      />
         
          </View>
          </TouchableOpacity>
    
        </View>
       
      </View>
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

