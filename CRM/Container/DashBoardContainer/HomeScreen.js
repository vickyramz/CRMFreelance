import React from "react";
import { View, Image, Text, BackHandler,AsyncStorage, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {LoginAPI} from '../API/PostApi'
const width = Dimensions.get('window').width
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
let  mass=[100,1200,1300,140,120];
export default class HomeScreen extends React.Component {

  static navigationOptions =
  {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = ({
      dataSourceBills:{},
      ReceivedPayment:'',
      status:'',
      Values:{},
      EmailAddress: '',
      Password: '',
      animate: false,
      webviewopen: false,
      externalLink: '',
      draweropen:false,
    })
  }

  componentDidMount() {
  this.GetData()
  }
  GetData=()=>{
    this.Load()
    LoginAPI('http://got-crm.com/api/mobile/dashboard.php','',this.successcallback,this.error,this.networkissue)
  }
  successcallback=async(data)=>{
  console.log('Login--->',data)
    this.Hide()
    if(data){  
     console.log('Login Response--->',data)  
     this.setState({dataSourceBills:data.bills,Values:data.values,ReceivedPayment:data.payment_received,status:data.payment_pending})  
    // this.TodayFollowups()
    }
   else {  
      //console.log('Login Response--->',data)   
      Alert.alert('Alert','Something went wrong') 
     }
  }
  Load=()=>{
    this.setState({animate:true})
  }
  Hide=()=>{
    this.setState({animate:false})
  }
  error=(error)=>{
    this.Hide()
    Alert.alert(error.status,error.message)
  }
  networkissue=(error)=>{
    Alert.alert('Failure',error)
  }

  NavigationOpen = () => {
    console.log('Navigation drawer open')
    this.props.navigation.toggleDrawer();
    //   this.props.navigation.toggleDrawer({
    //     side:'left',
    //     animated: true,
    //     to: 'closed',
    // });
  }
  render() {
 
    if (this.state.animate) {
      return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator
          color='#1a5fe1'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../Assets/1--Menu.png')} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{paddingBottom:20}} style={{flex:1}}>
           <View>
                                <ImageBackground style={{ resizeMode: 'contain', width: width, height: 80, justifyContent: 'flex-start', padding: 10 }} source={require('../Assets/menu.png')}>
                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.NavigationOpen} style={{ width: 40, height: 40, justifyContent: 'center' }}>
                      <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100 }} source={require('../Assets/ham.png')}></Image>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>Home</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
           

                    </View>
                  </View>
                                </ImageBackground>
                            </View>
<View style={{flex:1,}}>
  
  <View style={{backgroundColor:'#fff',borderRadius:10,flex:0.5}}>
<Text style={{color:'#000',textAlign:'center',fontWeight:'bold',padding:10}}>Number of Bills Generated</Text>
<View style={{height:1,backgroundColor:'#0a70ff'}}></View>
<View style={{padding:5}}>
  
    <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
    <Text style={{color:'#000'}}>Today</Text>
  <Text style={{color:'#000'}}>Week</Text>
  <Text style={{color:'#000'}}>Month</Text>
  <Text style={{color:'#000'}}>Yearly</Text>
    </View>
  
 

  
  <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
  <Text style={{color:'#000'}}>{this.state.dataSourceBills.today}</Text>
  <Text style={{color:'#000'}}>{this.state.dataSourceBills.week}</Text>
  <Text style={{color:'#000'}}>{this.state.dataSourceBills.month}</Text>
  <Text style={{color:'#000'}}>{this.state.dataSourceBills.year}</Text>
  </View>
</View>



  </View>
  <View style={{backgroundColor:'#fff',borderRadius:10,flex:0.5,marginTop:20}}>
<Text style={{color:'#000',textAlign:'center',fontWeight:'bold',padding:10}}>Values of Bills Generated</Text>
<View style={{height:1,backgroundColor:'#0a70ff'}}></View>
<View style={{padding:5}}>
<View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
  <View style={{width:100}}>
  <Text style={{color:'#000'}}>Today</Text>
  </View>
  <View style={{width:100}}>
  <Text style={{color:'#000'}}>Week</Text>
  </View>
  <View style={{width:100}}>
  <Text style={{color:'#000'}}>Month</Text>
  </View>
  <View style={{width:100}}>
  <Text style={{color:'#000'}}>Yearly</Text>
  </View>
 
    </View>
    <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
    <View style={{width:100}}>
    <Text style={{color:'#000'}}>{this.state.Values.today}</Text>
    </View>
    <View style={{width:100}}>
    <Text style={{color:'#000'}}>{this.state.Values.week}</Text>
    </View>
    <View style={{width:100}}>
    <Text style={{color:'#000'}}>{this.state.Values.month}</Text>
    </View>
    <View style={{width:100}}>
    <Text style={{color:'#000'}}>{this.state.Values.year}</Text>
    </View>
  
  </View>
</View>
</View>
  <View style={{flex:0.5,backgroundColor:'transparent',marginTop:30}}>
    
  <View style={{flex:0.3,backgroundColor:'#fff',justifyContent:'center',padding:30,}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{color:'#000'}}>Payment Received</Text>
    <Text style={{color:'#000'}}>{this.state.ReceivedPayment}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:'#000'}}>Status</Text>
    <Text style={{color:'#000'}}>{this.state.status==0?'Completed':'Pending'}</Text>
    </View>

  </View>
 
</View>
</View>
<View style={{height:200,backgroundColor:'transparent',borderRadius:10,marginLeft:10}}>
<LineChart
    data={{
      labels:this.state.dateU,
      datasets: [{
        data:mass
      }]
    }}
    width={Dimensions.get('window').width-30} // from react-native
    height={200}
    yAxisLabel={''}
    label={false}
   
    shadowcolor='#2b396a'
    strokecolor='#79b7e8'
    dots={false}
    chartConfig={{
      gradientOpacity1:0.4,
      gradientOpacity2:0.3,
      gradientOpacity3:0.05,
      gradientOpacity4:0,
      gradientOpacity5:0,
      shadowgradientback1:'#4E8EE5',
    shadowgradientback2:'#4E8EE5',
    shadowgradientback3:'#4E8EE5',
    shadowgradientback4:'#58AAF3',
    shadowgradientback5:'#97F4F7',
      backgroundColor: '#395ea4',
      backgroundGradientFrom: '#264aa8',
      backgroundGradientTo: '#2b396a',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        opacity:0.1
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
</ScrollView>        
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});