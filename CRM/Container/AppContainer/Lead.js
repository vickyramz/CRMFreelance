//This is an example code to set Backgroud image///
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import * as BindActions from '../Redux/Actions';
import { View, Text,Dimensions,FlatList, Image,StyleSheet,SafeAreaView,TouchableOpacity ,ActivityIndicator} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
import MaterialTabs from 'react-native-material-tabs';
import AddEnquiry from '../Components/AddEnquiry'
import Leadsheet from '../Components/Leadsheet'
import SearchBar from 'react-native-searchbar';

 const  Lead  = (props) => {
  const RBSheet = useRef();
  const RBSheets = useRef();
  const searchBar=useRef();
 const [selectedTab,setselectedTab]=useState(0) 
 const [LeadList,setLeadList]=useState([]) 
  const close=()=>{
  RBSheets.current.close();
  }
 const closes=()=>{
   RBSheets.current.close();
  }
  const setTab=(tab)=> {
   setselectedTab(tab)
  }
  useEffect(()=>{
    getLeadsData()
  },[])
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(false);
  const [ShowAlert, setAlerts] = useState(false);
  const [error, setError] = useState('');
  const LeadOperation = useSelector(state => state.LeadReducer);
  const loginOperation = useSelector(state => state.userReducer);
 function getLeadsData(){
   let params={
    page:1,
    count:5,
    contactId:'',
    assignee:'',
    stage:'',
    contact_person:'',
    phone:'',
    email :'',
    created_date:'',
    from_date:'',
    to_date:''
   }
   let token=loginOperation.loginResponse.token;
   console.log('token',token)
   dispatch(BindActions.LeadApi(params,token,"/leads/list/"+"all"));
 }
 if (LeadOperation.leadPending) {
  LeadOperation.leadPending=false
    setLoading(true)
    setAlerts(false);
}
 if (LeadOperation.leadSuccess) {
  console.log('LeadOperation',LeadOperation)
  LeadOperation.leadSuccess=false
  setLoading(false)
  setAlerts(false);
  setLeadList(LeadOperation.LeadResponse.records)
}
if (LeadOperation.IsleadError) {
  LeadOperation.IsleadError=false
  setLoading(false)
  setAlerts(true);
  setError(LeadOperation.leaderror.message)

}
const snackBarActions = () => {
  setAlerts(false);
};
const _handleResults =()=>{

}
const getItems = ({item}) => {
    return (
        <View style={{backgroundColor:'#fff',height:180,padding:20,justifyContent:'space-between',borderRadius:15,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:50,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#00A3E0',position:'relative'}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_person.charAt(0)}</Text>
             <View style={{position:'absolute',bottom:-10,alignSelf:'center',justifyContent:'center',width:20,height:20,borderRadius:10,backgroundColor:'#f4a640',alignItems:'center'}}>
             <Image 
            source={require('../Assets/star.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
             </View>
            </View>
            <View style={{marginLeft:30}}>
            <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>{item.contact_person}</Text>
            <Text style={{color:'gray',fontWeight:'bold',fontSize:12}}>{item.company_name}</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'gray',position:'relative'}}>
            <Image 
            source={require('../Assets/phone.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            <View style={{paddingLeft:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#000',fontWeight:'bold',fontSize:12}}>{item.phone}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'gray',position:'relative'}}>
            <Image 
            source={require('../Assets/mail.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            <View style={{paddingLeft:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#000',fontWeight:'bold',fontSize:12}}>{item.email}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{width:80,height:25,borderRadius:30,backgroundColor:'#f4a640',justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>$ 15,0000</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:"center",marginTop:10,paddingLeft:5}}>
            <Text style={{color:'gray',fontWeight:'bold',fontSize:12}}>Received</Text>
            </View>
            </View>
            
            </View>
            </View>
            <TouchableOpacity onPress={()=>RBSheet.current.open()}>
            <View style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#f39a3e',position:'relative'}}>
            <Image 
            source={require('../Assets/moredots.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
            </View>
            </TouchableOpacity>
        
          
          </View>
        </View>
    );
}
if (loader) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1}}>       
          <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.goBack(null)}>
                <View >
                <Image source={require('../Assets/back.png')} style={{width:20,height:20,resizeMode:'contain'}}></Image>
                </View>
                </TouchableOpacity>
                <View style={{paddingLeft:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Leads Management</Text>
                </View>
                <TouchableOpacity onPress={()=>searchBar.show()}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />
          </View>
                </TouchableOpacity>
              
          <TouchableOpacity >
              <View style={{alignSelf:'flex-end',width:120,height:40,backgroundColor:'#f39a3e',justifyContent:'center',alignItems:'center',marginRight:10,flexDirection:'row',borderRadius:6}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
            source={require('../Assets/more.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
                        </View>
<Text style={{color:'#fff',fontWeight:'bold',fontSize:14,paddingLeft:10}}>Add Enquiry</Text>
              </View>
              </TouchableOpacity>
            </View>           
            </View>
            <View style={{flex:0.9}}>
            <View style={{borderBottomColor: '#CACED0', borderBottomWidth: 1}}>
            <View style={{width: '100%'}}>
              <MaterialTabs
                items={['All','Enquiry', 'Lead', 'Prospects','Deals','Dropped']}
                selectedIndex={selectedTab}
                onChange={setTab.bind(this)}
                barColor="#ffff"
                indicatorColor="#00A3E0"
                activeTextColor="#00A3E0"
                inactiveTextColor="#000"
                textStyle={{
                  fontSize: 7,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
            {LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
            </View>
            {/* <View style={{flex:0.9}}>
               <View style={{flex:1,marginTop:10}}>          
            <View style={{borderBottomColor: '#CACED0', borderBottomWidth: 1}}>
            <View style={{width: '100%'}}>
              <MaterialTabs
                items={['All','Enquiry', 'Lead', 'Prospects','Deals','Dropped']}
                selectedIndex={selectedTab}
                onChange={setTab.bind(this)}
                barColor="#ffff"
                indicatorColor="#00A3E0"
                activeTextColor="#00A3E0"
                inactiveTextColor="#000"
                textStyle={{
                  fontSize: 7,
                  fontWeight: 'bold',
                }}
              />
            </View>
          </View>
            
             <View>
                 {LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
               </View>
               </View>
               <RBSheet
       ref={RBSheet}
          height={120}
          duration={250}
          customStyles={{
            container: {
            borderTopLeftRadius:25,
            borderTopRightRadius:25
            }
          }}
        >
          <Leadsheet onShut={()=>closes()} props={props} />
        </RBSheet> 
        <RBSheet
          ref={RBSheets}
          height={700}
          duration={250}
          customStyles={{
            container: {
            borderTopLeftRadius:25,
            borderTopRightRadius:25
            }
          }}
        >
          <AddEnquiry onShut={()=>close()} props={props} />
        </RBSheet> 
           

                
            </View> */}
            <SearchBar
  ref={searchBar}
  data={LeadList}
  handleResults={_handleResults}
  showOnLoad={false}
/>
<SnackBar
          visible={ShowAlert}
          textMessage={error}
          actionHandler={() => snackBarActions()}
          actionText="DISMISS"
        />
      </View>
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
export default Lead;