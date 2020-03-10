//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,FlatList, Image,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
import MaterialTabs from 'react-native-material-tabs';
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RBSheet from "react-native-raw-bottom-sheet";
import Leadsheet from '../Components/Leadsheet'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination}from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')
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
// _renderItem = ({item, index}) => {
//   return (
//       <View style={{backgroundColor:'#504fe1',height:180,padding:20,justifyContent:'space-between',borderRadius:15}}>
//         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//           <View style={{flexDirection:'row'}}>
//           <View style={{width:50,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
//           <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name.charAt(0)}</Text>
//            <View style={{position:'absolute',bottom:-10,alignSelf:'center',justifyContent:'center',width:20,height:20,borderRadius:10,backgroundColor:'#f4a640',alignItems:'center'}}>
//            <Image 
//           source={require('../Assets/star.png')}
//           style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
//         />
//            </View>
//           </View>
//           <View style={{marginLeft:10}}>
//           <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_name}</Text>
//           <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.email}</Text>
//           <View style={{flexDirection:'row'}}>
//           <View style={{width:80,height:25,borderRadius:30,backgroundColor:'#f4a640',justifyContent:'center',alignItems:'center',marginTop:10}}>
//           <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>$ 15,0000</Text>
//           </View>
//           <View style={{justifyContent:'center',alignItems:"center",marginTop:10,paddingLeft:5}}>
//           <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>Received</Text>
//           </View>
//           </View>
          
//           </View>
//           </View>
//           <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
//           <Image 
//           source={require('../Assets/moredots.png')}
//           style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
//         />
//           </View>
        
//         </View>
//          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//          <View style={{marginLeft:10}}>
//           <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Last follow up</Text>
//           <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
//           </View>
//           <View style={{marginLeft:10}}>
//           <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Next follow up</Text>
//           <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
//           </View>
//           <View style={{marginLeft:10}}>
//           <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
//           <Image 
//           source={require('../Assets/phone.png')}
//           style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
//         />
//           </View>
//           </View>
//          </View>
//       </View>
//   );
// }
getItems = ({item}) => {
    return (
        <View style={{backgroundColor:'#504fe1',height:180,padding:20,justifyContent:'space-between',borderRadius:15,
        shadowColor: '#504fe1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,}}>
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
            <View style={{marginLeft:30}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12,}}>{item.contact_name}</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>ABC private Limited</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Image 
            source={require('../Assets/phone.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            <View style={{paddingLeft:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.Phone}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Image 
            source={require('../Assets/mail.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            <View style={{paddingLeft:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.email}</Text>
            </View>
            </View>
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
            <TouchableOpacity onPress={()=>this.RBSheet.open()}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#6869e4',position:'relative'}}>
            <Image 
            source={require('../Assets/moredots.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            </TouchableOpacity>
        
          
          </View>
           {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{marginLeft:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Last follow up</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>Next follow up</Text>
            <Text style={{color:'#9b9aed',fontWeight:'bold',fontSize:12}}>{item.last_follow}</Text>
            </View>
            
           </View> */}
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
  setTab(tab) {
    this.setState({selectedTab: tab});
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
            <View style={{paddingHorizontal:20}}>
            <View style={styles.SectionStyle}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Enquiries/contact name/Email"
            underlineColorAndroid="transparent"
          />
        </View>
            </View>
              <TouchableOpacity onPress={()=>this.openSheet()}>
              <View style={{alignSelf:'flex-end',width:120,height:40,backgroundColor:'#f39a3e',justifyContent:'center',alignItems:'center',marginRight:20,flexDirection:'row',borderRadius:6}}>
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
                
               <View style={{flex:1,marginTop:10}}>
            
            <View style={{borderBottomColor: '#CACED0', borderBottomWidth: 1}}>
            <View style={{width: '100%'}}>
              <MaterialTabs
                items={['Enquiry', 'Lead', 'Propspect','Deal','Dropped']}
                selectedIndex={this.state.selectedTab}
                onChange={this.setTab.bind(this)}
                barColor="#ffff"
                indicatorColor="#00A3E0"
                activeTextColor="#00A3E0"
                inactiveTextColor="#606B71"
                textStyle={{
                  fontFamily: 'Papyrus',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
                {/* <View> 
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
                </View> */}
              
             <View>
             {/* <View style={{justifyContent:'center',alignItems:'center',paddingVertical:20}}>
                <Text style={{color:'#d3d1d7',fontWeight:'bold',fontSize:14,textAlign:'center'}}>Total Enquiry List</Text>
                </View> */}
                 {item.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}
    
                  data={item}
                  extraData={this.state}
               
                  keyExtractor={(item, index) => '' + index}
                  renderItem={(item, index) => this.getItems(item, index)}
                  
                /></View>:null}
               </View>
               </View>
               <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={120}
          duration={250}
          customStyles={{
            container: {
            borderTopLeftRadius:25,
            borderTopRightRadius:25
            }
          }}
        >
          <Leadsheet onShut={()=>this.close()} props={this.props} />
        </RBSheet> 
</LinearGradient>
           

                
            </View>
           
         
      </View>

    );
  }
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

