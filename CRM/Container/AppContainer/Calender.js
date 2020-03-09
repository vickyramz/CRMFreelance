//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,StyleSheet, Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RBSheet from "react-native-raw-bottom-sheet";
import AddContacts from '../Components/AddSchedule'

import { TouchableOpacity } from 'react-native-gesture-handler';
const workout = {key:'workout', color: 'green'};
export default class Calender extends React.Component {
    static navigationOptions = () => {
        return {
          header: null,
        }
      }
      
  constructor(props){
    super(props);
    this.arrayholder = [];
    this.state={EmailAddress:'',Password:'',
    dataSource:[],}
  }



  keyExtractor (item) {
    return item.id;
  }
  openSheet=()=>{
    this.RBSheet.open();
  }
  close=()=>{
    this.RBSheet.close();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.08}}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
          <View style={{padding:20,flexDirection:'row'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Assets/back.png')} style={{width:20,height:20,resizeMode:'contain'}}></Image>
                </View>
                <View style={{paddingLeft:10}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Schedule</Text>
                </View>
            </View>
          </TouchableOpacity>
         
            
            
            </View>
            <View style={{flex:0.92}}>
              <TouchableOpacity onPress={()=>this.openSheet()}>
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
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={600}
          duration={250}
          customStyles={{
            container: {
            
            }
          }}
        >
          <AddContacts onShut={()=>this.close()} props={this.props} />
        </RBSheet>
                
            </View>
           
         
      </View>

    );
  }
}

