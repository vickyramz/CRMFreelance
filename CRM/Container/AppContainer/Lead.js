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
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination}from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')
import { TouchableOpacity } from 'react-native-gesture-handler';
const workout = {key:'workout', color: 'green'};
const item=[
  {
    'contact_name':'Manju Raj',
    'email':'gfjgfkhfsh@gmail.com',
    'Phone':135463656,
    'Assignee':'Manju Raj',
    'last_follow':'21-feb-2020',
    'next_follow':'21-feb-2020',
     'bills':{
       'received':62535353,
      
     }
  },
  {
    'contact_name':'Manju Raj',
    'email':'gfjgfkhfsh@gmail.com',
    'Phone':135463656,
    'Assignee':'Manju Raj',
    'last_follow':'21-feb-2020',
    'next_follow':'21-feb-2020',
     'bills':{
       'received':62535353,
       
     }
  },
  {
    'contact_name':'Manju Raj',
    'email':'gfjgfkhfsh@gmail.com',
    'Phone':135463656,
    'Assignee':'Manju Raj',
    'last_follow':'21-feb-2020',
    'next_follow':'21-feb-2020',
     'bills':{
       'received':62535353,
      
     }
  },
  {
    'contact_name':'Manju Raj',
    'email':'gfjgfkhfsh@gmail.com',
    'Phone':135463656,
    'Assignee':'Manju Raj',
    'last_follow':'21-feb-2020',
    'next_follow':'21-feb-2020',
     'bills':{
       'received':62535353,
       
     }
  }
]
export default class Lead extends React.Component {
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
  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={item.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: '#fff' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: '#000'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}
_renderItem = ({item, index}) => {
  return (
      <View style={{backgroundColor:'#504fe1',height:160,padding:20,justifyContent:'space-between',borderRadius:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{width:50,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name.charAt(0)}</Text>
           <View style={{position:'absolute',bottom:-10,alignSelf:'center',justifyContent:'center',width:20,height:20,borderRadius:10,backgroundColor:'#f4a640',alignItems:'center'}}>
           <Image 
          source={require('../Assets/star.png')}
          style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
        />
           </View>
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name}</Text>
          <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.email}</Text>
          <View style={{flexDirection:'row'}}>
          <View style={{width:80,height:25,borderRadius:30,backgroundColor:'#f4a640',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>$ 15,0000</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:"center",marginTop:10,paddingLeft:5}}>
          <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>Received</Text>
          </View>
          </View>
          
          </View>
          </View>
          <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
          <Image 
          source={require('../Assets/moredots.png')}
          style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
        />
          </View>
        
        </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{marginLeft:10}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Last follow up</Text>
          <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Next follow up</Text>
          <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
          </View>
          <View style={{marginLeft:10}}>
          <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
          <Image 
          source={require('../Assets/phone.png')}
          style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
        />
          </View>
          </View>
         </View>
      </View>
  );
}
getItems = (item) => {
    return (
        <View style={{backgroundColor:'#504fe1',height:160,padding:20,justifyContent:'space-between',borderRadius:15}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:50,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name.charAt(0)}</Text>
             <View style={{position:'absolute',bottom:-10,alignSelf:'center',justifyContent:'center',width:20,height:20,borderRadius:10,backgroundColor:'#f4a640',alignItems:'center'}}>
             <Image 
            source={require('../Assets/star.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
             </View>
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name}</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.email}</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{width:80,height:25,borderRadius:30,backgroundColor:'#f4a640',justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>$ 15,0000</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:"center",marginTop:10,paddingLeft:5}}>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>Received</Text>
            </View>
            </View>
            
            </View>
            </View>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Image 
            source={require('../Assets/moredots.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
          
          </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{marginLeft:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Last follow up</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Next follow up</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
            </View>
            <View style={{marginLeft:10}}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Image 
            source={require('../Assets/phone.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            </View>
           </View>
        </View>
    );
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
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Leads Management</Text>
                </View>
            </View>
          </TouchableOpacity>
         
            
            
            </View>
            <View style={{flex:0.92}}>
              <TouchableOpacity onPress={()=>this.openSheet()}>
              <View style={{alignSelf:'flex-end',width:120,height:40,backgroundColor:'#f39a3e',justifyContent:'center',alignItems:'center',marginRight:20,flexDirection:'row'}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
            source={require('../Assets/more.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
                        </View>
<Text style={{color:'#fff',fontWeight:'bold',fontSize:14,paddingLeft:10}}>Add Enquiry</Text>
              </View>
              </TouchableOpacity>
              <LinearGradient colors={['#fffdff', '#ebebf8', '#f7f7f7']} style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#d3d1d7',fontWeight:'bold',fontSize:14,textAlign:'center'}}>Recent Enquiry List</Text>
                </View>
               <View style={{flex:1,marginTop:10}}>
               <Carousel
              ref={(c) => { this._carousel = c; }}
              data={item}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                hasParallaxImages={true}
                itemWidth={screenWidth - 60}
            />
             
               </View>
               <View>
                 {item.length>0?
                 item.map((items,index)=>{
                   return(
                    this.getItems(items)
                   )
                  
                 }):null}
               </View>
</LinearGradient>
           

                
            </View>
           
         
      </View>

    );
  }
}

