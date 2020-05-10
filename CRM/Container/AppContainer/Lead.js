//This is an example code to set Backgroud image///
import React, { useState ,useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SnackBar from 'react-native-snackbar-component';
import RBSheet from "react-native-raw-bottom-sheet";
import * as BindActions from '../Redux/Actions';
import { View, Text,Dimensions,FlatList, Image,StyleSheet,SafeAreaView,TouchableOpacity ,ActivityIndicator} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
import {Container, Tab, Tabs, StyleProvider} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';
import AddEnquiry from '../Components/AddEnquiry'
import Leadsheet from '../Components/Leadsheet'
import SearchBar from 'react-native-searchbar';

 const  Lead  = (props) => {
  const RBSheetRef = useRef();
  const RBSheetsRef = useRef();
  const searchBar=useRef();
 const [selectedTab,setselectedTab]=useState(0) 
 const [LeadList,setLeadList]=useState([]) 
 const [BillList,setBillList]=useState({});
 const [TabText,setTabText]=useState('all')
  const close=()=>{
  RBSheetsRef.current.close();
  }
 const closes=()=>{
   RBSheetsRef.current.close();
  }
  const setTab=(s)=> {
    let tab=s.i;
    console.log('Tab',tab)
   setselectedTab(tab)
   let status='';
   if(tab===0){
     status='all'
   }
   if(tab===1){
     status='enquiry'
   }
   if(tab===2){
    status='lead'
  }
  if(tab===3){
    status='prospect'
  }
  if(tab===4){
    status='deal'
  }
  if(tab===5){
    status='dropped'
  }
   setTabText(status)
  }
  useEffect(()=>{
    getLeadsData()
  },[TabText,AddResponse])
  const dispatch = useDispatch();
  const [loader, setLoading] = useState(false);
  const [success,AddResponses]=useState()
  const [ShowAlert, setAlerts] = useState(false);
  const AddResponse = useSelector(state => state.AddLeadReducer);
  const [error, setError] = useState('');
  const [ShowAlertSuccess, setAlertsSuccess] = useState(false);
  const LeadOperation = useSelector(state => state.LeadReducer);
  const loginOperation = useSelector(state => state.userReducer);
  const billOperation = useSelector(state => state.BillReducer);
 function getLeadsData(){
   let params={
    page:1,
    count:10000,
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
   dispatch(BindActions.LeadApi(params,token,"/leads/list/"+`${TabText}`)).then(response=>{
    getBillItems(1);
   })
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
if (billOperation.BillPending) {
  billOperation.BillPending=false
    setLoading(true)
    setAlerts(false);
}
 if (billOperation.BillSuccess) {
  billOperation.BillSuccess=false
  setLoading(false)
  setAlerts(false);
 // console.log('BillOperation',billOperation)
 // setBillList(billOperation.BillResponse)
}
if (billOperation.IsBillError) {
  billOperation.IsBillError=false
  setLoading(false)
  setAlerts(true);
  setError(billOperation.Billerror.message) 

}
const snackBarActions = () => {
  setAlerts(false);
};
const _handleResults =(text)=>{
  //const result = words.filter(word => word.contact_person == text);
}
Success=(text)=>{

  setAlertsSuccess(true);
  AddResponses(text)
  
}
const getBillItems=(item)=>{
  let token=loginOperation.loginResponse.token;
  let params={
    ids:81
  }
  dispatch(BindActions.BillApi(params,token,"/leads/list/bills"));
}
const getItems = ({item}) => {
    //getBillItems(item);
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
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.contact_first_name.charAt(0)}</Text>
             <View style={{position:'absolute',bottom:-10,alignSelf:'center',justifyContent:'center',width:20,height:20,borderRadius:10,backgroundColor:'#f4a640',alignItems:'center'}}>
             <Image 
            source={require('../Assets/star.png')}
            style={{width:10,height:10,resizeMode:'contain',tintColor:'#fff'}}
          />
             </View>
            </View>
            <View style={{marginLeft:30}}>
            <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>{item.contact_first_name+" "+item.contact_last_name}</Text>
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
            <View style={{flexDirection:'row',}}>
            {/* <View style={{width:80,height:25,borderRadius:30,backgroundColor:'#f4a640',justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>$ 15,0000</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:"center",marginTop:10,paddingLeft:5}}>
            <Text style={{color:'gray',fontWeight:'bold',fontSize:12}}>Received</Text>
            </View> */}
            <View style={{width:80,height:25,borderRadius:30,backgroundColor:'gray',justifyContent:'center',alignItems:'center',marginTop:10,marginLeft:10}}>
    <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}}>{item.lead_status}</Text>
            </View>
            </View>
           
            </View>
            </View>
            <TouchableOpacity onPress={()=>RBSheetRef.current.open()}>
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

    return (
      <Container style={{backgroundColor: '#fff',flex:1}}>
      <SafeAreaView>
        <View >
        <View style={{ height:80}}>       
          <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.goBack(null)}>
                <View >
                <Image source={require('../Assets/back.png')} style={{width:20,height:20,resizeMode:'contain'}}></Image>
                </View>
                </TouchableOpacity>
                <View style={{paddingLeft:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Leads Management</Text>
                </View>
                <TouchableOpacity onPress={()=>searchBar.current.show()}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />
          </View>
                </TouchableOpacity>
              
          <TouchableOpacity onPress={()=>RBSheetsRef.current.open()}>
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
        </View>
      </SafeAreaView>
      <Tabs onChangeTab={(tab)=>setTab(tab)} tabBarUnderlineStyle={{backgroundColor: '#00A3E0'}}>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`All `}>
          <View style={{flex:1}}>
            {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
       
          </View>
        </Tab>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`Enquiry `}>
          <View style={{flex:1}}>
          {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
          </View>
        </Tab>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`Lead `}>
          <View style={{flex:1}}>
          {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
          </View>
        </Tab>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`Prospects `}>
          <View style={{flex:1}}>
          {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
          </View>
        </Tab>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`Deals `}>
          <View style={{flex:1}}>
          {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
          </View>
        </Tab>
        <Tab
          textStyle={{
            color: '#000',
            fontSize: 10,
           
          }}
          activeTextStyle={{
            color: '#00A3E0',
            fontWeight: '500',
            fontSize: 10,
           
          }}
          activeTabStyle={{backgroundColor: '#fff'}}
          tabStyle={{backgroundColor: '#fff'}}
          heading={`Dropped `}>
          <View style={{flex:1}}>
          {loader?<ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="#0000ff" />:LeadList.length>0?
                 <View>
                  <FlatList
                  style={{ flexGrow: 1, paddingBottom: 20}}   
                  data={LeadList}              
                  renderItem={(item, index) =>getItems(item, index)}
                  
                /></View>:null}
          </View>
        </Tab>
</Tabs>
<View>
<RBSheet
          ref={RBSheetsRef}
          height={700}
          duration={250}
          customStyles={{
            container: {
            borderTopLeftRadius:25,
            borderTopRightRadius:25
            }
          }}
        >
          <AddEnquiry Success={(text)=>Success(text)} LeadList={LeadList} onShut={()=>close()} props={props} />
        </RBSheet> 
                </View>
               <View>
               <RBSheet
       ref={RBSheetRef}
          height={120}
          duration={250}
          customStyles={{
            container: {
            borderTopLeftRadius:25,
            borderTopRightRadius:25
            }
          }}
        >
          <Leadsheet  onShut={()=>closes()} props={props} />
        </RBSheet> 
                 </View> 
          
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
         <SnackBar
         backgroundColor='green'
          visible={ShowAlertSuccess}
          textMessage={success}
          
          actionHandler={() => snackBarActions()}
          actionText=""
        />
</Container>

              
    
  
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
export default Lead;