//This is an example code to set Backgroud image///
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text,Dimensions,TextInput,Image, StyleSheet ,TouchableOpacity} from 'react-native';
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
const Filter =(props)=> {

  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const ContactReducer= useSelector(state=>state.ContactGroupReducer)
  const [ContactGroupList,setContactGroup]=useState(ContactReducer.ContactGroupListResponse)
const  onSelectedItemsChange = selectedItems => {
    setState({ selectedItems });
  };
 const navigate=()=>{
    props.onShut()
    const {props}= props
    props.navigation.navigate('SearchUser')
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
    const placeholder = {
      label: 'All',
      value: null,
      color: '#000',
    };

    return (
      <View style={{ flex: 1 ,padding:20}}>
        <View >
        <View style={{paddingHorizontal:20}}>
            <View style={styles.SectionStyle}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Contacts"
            underlineColorAndroid="transparent"
          />
        </View>
            </View>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact Group</Text>
          
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
            <Text style={{ fontSize: 16, color: '#000',  }}>Phone Number</Text>
           
          </View>
            <View style={{}}>
            <TextInput
            placeholder='Phone Number'
            keyboardType={'numeric'}
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setState({text})}
       
      />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Email</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Email'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => setState({text})}
       
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Created date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
      
        mode="date"
        placeholder="start date"
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
        onDateChange={(date) => {setState({date: date})}}
      />
        
         
      </View>
      <TouchableOpacity onPress={()=>props.onShut()}>
      <View style={{backgroundColor:'#f39a3e',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Apply Filters</Text>
      </View>
    <View style={{paddingLeft:10}}>
    <Image 
          source={require('../Assets/filter.png')}
          style={{width:15,height:15,resizeMode:'contain',tintColor:'#fff'}}
        />
    </View>
    

    </View>
      </TouchableOpacity>
   <TouchableOpacity onPress={()=>props.onShut()}>
   <View style={{backgroundColor:'#6c757d',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Reset Filters</Text>
      </View>
    <View style={{paddingLeft:10}}>
    <Image 
          source={require('../Assets/refresh.png')}
          style={{width:15,height:15,resizeMode:'contain',tintColor:'#fff'}}
        />
    </View>
    

    </View>
   </TouchableOpacity>
   
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
  export default Filter

