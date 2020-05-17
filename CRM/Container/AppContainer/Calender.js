import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text,Dimensions,StyleSheet,SafeAreaView, Image,TouchableOpacity ,ActivityIndicator} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import SnackBar from 'react-native-snackbar-component';
const WIDTH = Dimensions.get('window').width;
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
import moment from 'moment';
import * as BindActions from '../Redux/Actions';
const ITEM_HEIGHT = 50;
let date='2020-05-11'
let obj=[];
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
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const[items,setItems]=useState({});
  const[MeetingList,setMeetingsList]=useState([])
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const MeetingReducer=useSelector(state=>state.MeetingReducer);
  const [scheduleEvents,setscheduleEvents]=useState()
  const[meetingsDetails,setDetails]=useState([])
  const loginOperation = useSelector(state => state.userReducer);
  useEffect(()=>{
    getMeetings()
  },[])
  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
const getMeetings=()=>{
    let token=loginOperation.loginResponse.token;
    let url = '/reports/schedule'
    dispatch(BindActions.MeetingApi(token,url))
  }
  console.log('MeetingReducer.MeetingsResponse',MeetingReducer)
  if(MeetingReducer.MeetingsPending){
    MeetingReducer.MeetingsPending=false
    setLoading(true)
  }
  if(MeetingReducer.MeetingsSuccess){
    MeetingReducer.MeetingsSuccess=false
    setLoading(false)
    let data=[]
    MeetingReducer.MeetingsResponse.map((item,index)=>{
      var unixInt = parseInt(item.schedule_from_date * 1, 10); 
      var Fromdate  = moment.utc(unixInt).local().format('YYYY-MM-DD')

      var unixInt = parseInt(item.schedule_to_date * 1, 10); 
      var toDate  = moment.utc(unixInt).local().format('YYYY-MM-DD')
       data=data.concat(getDates(Fromdate,toDate))
       console.log('times',getDates(Fromdate,toDate))
      
   
       //obj.push(date)
    })
    let itemss={}
    data.map((item,value)=>{
     itemss[item]={startingDay: true, color: '#00A3E0',textColor:'#fff'};
   })
   setDetails(MeetingReducer.MeetingsResponse);
   setItems(itemss)
    // MeetingReducer.MeetingsResponse.map((item,index)=>{
    //   var unixInt = parseInt(item.schedule_to_date * 1, 10); 
    //   var date  = moment.utc(unixInt).local().format('YYYY-MM-DD')
    //    console.log('times',getDates())
    //    obj.push(date)
    // })
  
 
   
  }
  if(MeetingReducer.MeetingsError){
    MeetingReducer.MeetingsError=false
    setLoading(false)
   // let contryDetails=Object.keys(CountryReducer.IsCountryListResponseSuccess)
   setAlerts(true)
   //setError(MeetingReducer.Meetingserror)
  }
  const RBSheets=useRef()
  const searchBar =useRef()
 const openSheet=()=>{
    RBSheets.current.open();
  }
  const close=()=>{
    RBSheets.current.close();
  }
  const seletedDate=(day)=>{
console.log(day)
let data={}
console.log('data',getTimesTamp(day.timestamp.toString()))
  data=meetingsDetails.find(elements=>getTimesTamp(elements.schedule_from_date)===getTimesTamp(day.timestamp.toString()) || getTimesTamp(elements.schedule_to_date)===getTimesTamp(day.timestamp.toString()))
 console.log('data',data)
 setscheduleEvents(data && data.schedule_title?data.schedule_title:'')


  }
  const getTimesTamp=(d)=>{
    var unixInt = parseInt(d * 1, 10); 
    var toDate  = moment.utc(unixInt).local().format('YYYY-MM-DD')
    return toDate
  }
  const [LeadList,setLeadList]=useState([]) 
  const goback=()=>{
    props.navigation.goBack(null);
  }
  const _handleResults =(text)=>{
    //const result = words.filter(word => word.contact_person == text);
  }

  if (loader) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
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
 markedDates={items}
 onDayPress={(day) => seletedDate(day)}
// Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
markingType={'period'}
/>
<View style={{padding:20,height:80,backgroundColor:'#f8f8f8',justifyContent:'space-between',flexDirection:'row'}}>
  <Text style={{fontSize:16}}>Title</Text>
  <Text style={{fontSize:16}}>{scheduleEvents}</Text>
</View>
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
{/* <SnackBar
            autoHidingTime={2000}
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText=""
        /> */}
   {/* <SnackBar
            autoHidingTime={2000}
         backgroundColor='green'
          visible={ShowAlertSuccess}
          textMessage={success}
          
          actionHandler={() => snackBarActions()}
          actionText=""
        /> */}
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

