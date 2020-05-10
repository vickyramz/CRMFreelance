
import { View, Text,Dimensions,TextInput,Image, StyleSheet ,TouchableOpacity} from 'react-native';
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import { Chevron, Heart, Triangle } from 'react-native-shapes'

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
const  navigate=()=>{
    props.onShut()
    const {props}= props
    props.navigation.navigate('SearchUser')
  }
  
    const placeholder = {
      label: 'All',
      value: null,
      color: '#000',
    };

    return (
      <View style={{ flex: 1 ,padding:20}}>

        {props.tabText==='enquiry'? <View style={{marginLeft:20}}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Lead</Text>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Enquiry</Text>
        </View>:null}

        {props.tabText==='lead'? <View style={{marginLeft:20}}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Prospect</Text>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Lead</Text>
        </View>:null}
       
        {props.tabText==='prospect'? <View style={{marginLeft:20}}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Convert To Deal</Text>
        <Text style={{ fontSize: 16, color: '#000', fontWeight:'bold' ,marginTop:20}}>Drop Prospect</Text>
        </View>:null}

        {props.tabText==='deal'? <View style={{marginLeft:20}}>
        <Text style={{ fontSize: 16, color: '#000',fontWeight:'bold'  }}>Drop Prospect</Text>
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

