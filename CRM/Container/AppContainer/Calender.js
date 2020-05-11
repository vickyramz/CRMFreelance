import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text,Dimensions,StyleSheet,SafeAreaView, Image,TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RBSheet from "react-native-raw-bottom-sheet";
import SearchBar from 'react-native-searchbar';
import AddSchedule from '../Components/AddSchedule'

const workout = {key:'workout', color: 'green'};
const Calender=(props)=> {
  function keyExtractor (item) {
    return item.id;
  }
  const RBSheets=useRef()
  const searchBar =useRef()
 const openSheet=()=>{
    RBSheets.current.open();
  }
  const close=()=>{
    RBSheets.current.close();
  }
  const [LeadList,setLeadList]=useState([]) 
  const goback=()=>{
    props.navigation.goBack(null);
  }
  const _handleResults =(text)=>{
    //const result = words.filter(word => word.contact_person == text);
  }
    return (
      <SafeAreaView style={{ flex: 1 }}>
               <Header style={{ backgroundColor: '#f8f8f8' ,alignItems: 'center', justifyContent: 'center'}}>
           <Left style={{ flexDirection: 'row' }} >
           <TouchableOpacity onPress={()=>goback()}>
             <Image 
            
            source={require('../Assets/back.png')}
            style={{width:20,height:20,resizeMode:'contain',tintColor:'gray'}}
          />
          </TouchableOpacity>
              </Left>
             <Body >
                <Text style={{fontWeight:'bold',fontSize:18}} >Schedule</Text>
            </Body>
            <Right style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=>searchBar.current.show()}>
              
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />
        
                </TouchableOpacity>
              </Right>
        </Header>
  
            <View style={{flex:0.92}}>
              <TouchableOpacity onPress={()=>openSheet()}>
              <View style={{alignSelf:'flex-end',width:100,height:40,backgroundColor:'#f39a3e',justifyContent:'center',alignItems:'center',marginRight:20,flexDirection:'row'}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
            source={require('../Assets/more.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
                        </View>
<Text style={{color:'#fff',fontWeight:'bold',fontSize:14,paddingLeft:10}}>Add New</Text>
              </View>
              </TouchableOpacity>
           
            <Calendar
 markedDates={{
  '2020-03-20': {textColor: 'green'},
  '2020-03-21': {startingDay: true, color: 'green'},
  '2020-03-22': {selected: true, endingDay: true, color: 'orange', textColor: 'gray'},
  '2020-03-23': {disabled: true, startingDay: true, color: 'green', endingDay: true}
}}
// Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
markingType={'period'}
/>
<RBSheet
          ref={RBSheets}
          height={600}
          duration={250}
          customStyles={{
            container: {
            
            }
          }}
        >
          <AddSchedule onShut={()=>close()} props={props} />
        </RBSheet>
                
            </View>
            <SearchBar
  ref={searchBar}
  data={LeadList}
  handleResults={_handleResults}
  showOnLoad={false}
/>
         
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
  loader: {
    flex: 1,
    justifyContent: 'center',
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
export default Calender;

