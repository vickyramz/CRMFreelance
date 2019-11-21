import React from "react";
import { View, Image, Text, ScrollView,TouchableHighlight,AsyncStorage, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";

import {LoginAPI} from '../API/PostApi'
const width = Dimensions.get('window').width
import Spinner from 'react-native-loading-spinner-overlay';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RNSpeedometer from 'react-native-speedometer'
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box'
import Wave from 'react-native-waveview'
import ImagePicker from 'react-native-image-picker';
import { PieChart } from 'react-native-svg-charts'
import {
  LineChart,
  BarChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
let  mass=[100,1200,1300,140,120];
let chart_wh = 300
let series = [123, 321, 123, 789, 537]
let sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage:0.5
}
let data = [  
    {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
    }
];
let color=
  [
    '#006400',
    '#00FF7F',
    '#FFFF00',
    '#FFD700',
    '#CD5C5C',
    '#B22222',
    '#FF1493',
    '#9932CC',
    '#9400D3',
    '#0000FF',
    '#00F5FF',
    '#00FF00',
    '#2F4F4F',
    '#696969',
    '#191970',
    '#00BFFF',
    '#A52A2A',
    '#00008B',
    '#EEE685',
    '#8B3626',
    '#CD00CD',
    '#303030',
    '#191970',
    '#00BFFF',
    '#A52A2A',
    '#00008B',
    '#EEE685',
    '#8B3626',
    '#CD00CD',
    '#303030'
  

  ]

export default class HomeScreen extends React.Component {

  static navigationOptions =
  {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = ({
      categories:[],
      dataSourceBills:{},
      isChecked:true,
      value: 50,
      values:20,
      labels: [
        {
          name: 'Too Slow',
          labelColor: '#ff2900',
          activeBarColor: '#ff2900',
        },
        {
          name: 'Very Slow',
          labelColor: '#ff5400',
          activeBarColor: '#ff5400',
        },
        {
          name: 'Slow',
          labelColor: '#f4ab44',
          activeBarColor: '#f4ab44',
        },
        {
          name: 'Normal',
          labelColor: '#f2cf1f',
          activeBarColor: '#f2cf1f',
        },
        {
          name: 'Fast',
          labelColor: '#14eb6e',
          activeBarColor: '#14eb6e',
        },
        {
          name: 'Unbelievably Fast',
          labelColor: '#00ff6b',
          activeBarColor: '#00ff6b',
        },
      ],
      carouselItems: [
        {

         // ShadowImages: require('./assets/etherem.png'),

          title: "Early Morning",
          description:'This is the Notification ',
          backgroundColor:'#FD325F',
        },
        {
         // ShadowImages: require('./assets/bshadow.png'),
         title: "Early Morning",
         description:'This is the Notification ',
         backgroundColor:'#FF643C',
        },
         {
          // ShadowImages:require('./assets/bitwingslogowallet.png'),
          title: "Early Morning",
          description:'This is the Notification ',
          backgroundColor:'#E8B212',
         }

      ]
    ,
      pie:[],
      ReceivedPayment:'',
      status:'',
      Values:{},
      EmailAddress: '',
      activeSlide:0,
      Password: '',
      animate: false,
      webviewopen: false,
      externalLink: '',
      draweropen:false,
    })
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })

  }
  onFocusFunction=()=>{
    this.GetData()
  }
  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.focusListener.remove()
  }
  GetData=()=>{
    this.Load()
    LoginAPI('http://got-crm.com/api/mobile/dashboard.php','',this.successcallback,this.error,this.networkissue)
  }
  _renderItem({ item, index }) {
    return (
      <View style={{ width:300,height:80,backgroundColor:item.backgroundColor,borderWidth:1,borderColor:'#A9A9A9' ,borderRadius:10,justifyContent:'center',padding:10,alignItems:'center',opacity:0.9}}>
        <Text style={{ color: '#fff', marginTop: 10,fontWeight:'bold' }} >{item.title}</Text>
        <Text style={{ color: '#fff', marginTop: 2 }} >{item.description}</Text>
        {/* <Image style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={item.ShadowImages}
        /> */}
      </View>
    )
  }
  get pagination () {
    const { carouselItems, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'transparent)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: '#FD325F'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
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
     this.GraphData()
  }
  GraphData=()=>{
    LoginAPI('http://got-crm.com/api/mobile/salesReports.php','',this.PieCharyData,this.error)
  }
  renderCategories=()=> {
   // const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    return this.state.categories.map((item, index) => <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:8, color:('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)}} key={index}>{item.region}</Text>
    </View>);
}
  PieCharyData=(arraydata)=>{
    data=[]
    series=[]
    sliceColor=[]
  //  console.log('length',arraydata.length)
    for(let i=0;i<arraydata.length;i++){
    //  console.log('color')
    series.push(arraydata[i].sales_value)
    sliceColor.push(color[i])
    }
    this.setState({pie:series,categories:arraydata})
    console.log('data and color',sliceColor)
  
  }
  Load=()=>{
    this.setState({animate:true})
  }
  Remeberme = async () => {
    this.setState({
      isChecked: !this.state.isChecked
    })

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
    const data = series

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))
  
    return (
      <SafeAreaView style={{ flex: 1 ,}}>
      
      <View style={{ flex: 1}}>
      <View style={{flex:0.11}}>
                                <View style={{backgroundColor:'#FD325F',justifyContent:'center',height:60}} >
                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding:10 }}>
                    <TouchableOpacity onPress={this.NavigationOpen} style={{ width: 40, height: 40, justifyContent: 'center' }}>
                      <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100 }} source={require('../Assets/ham.png')}></Image>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, color: '#fff',fontWeight:'bold'}}>Auto RSP</Text>
                    </View>
                    <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100,tintColor:'#fff' }} source={require('../Assets/alarm.png')}></Image>
                      </View>
                  </View>
                                </View>
                            </View>
        <View style={{flex:0.89}}>
         
          <LinearGradient
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{flex:1}}>   
         <ScrollView style={{flex:1}}>
          <View style={{flex:1}}>
          <View>
          <Carousel
                data={this.state.carouselItems}
                sliderWidth={width}
                itemWidth={300}
                Pagination={true}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                inactiveSlideOpacity={0.5}
                loop={true}
                autoplay={true}
               // onSnapToItem={(index) => this.action(index)}
              />
              { this.pagination }
          </View>
              <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              <Text style={{ fontSize: 15, color: '#000',fontWeight:'bold'}}>Auto RSP</Text>
              <View style={{flexDirection:'row'}}> 
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{ resizeMode: 'contain', width: 15, height: 15,tintColor:'#FD325F' }} source={require('../Assets/refresh-button.png')}></Image>
              </View>
             
              <Text style={{ fontSize: 12, color: '#000',fontWeight:'bold',marginLeft:10}}>Last Updated Date 20/11/2017</Text>
              </View>
            
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
              <View >
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>Product</Text>
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center'}}>1</Text>
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center',marginTop:10}}>2</Text>
              </View>
              
           
              <View >
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>RSP</Text>
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center'}}>86.78</Text>
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center',marginTop:10}}>86.000</Text>
              </View>
              
              <View >
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>RSP Received</Text>
              <View style={{   flexDirection: 'row' ,alignItems:'center',justifyContent:'center'}}>
                      <CheckBox
                        checkBoxColor='#FD325F'
                        onClick={() => this.Remeberme(this)}
                        isChecked={this.state.isChecked}
                      />
                  
                    </View>
                    <View style={{   flexDirection: 'row' ,alignItems:'center',justifyContent:'center'}}>
                      <CheckBox
                        checkBoxColor='#FD325F'
                        onClick={() => this.Remeberme(this)}
                        isChecked={this.state.isChecked}
                      />
                  
                    </View>
                    
              </View>
              
              <View >
              <Text style={{color:'#000',fontWeight:'bold',fontSize:12,}}>RSP Puplished</Text>
              <View style={{   flexDirection: 'row' ,alignItems:'center',justifyContent:'center'}}>
                      <CheckBox
                        checkBoxColor='#FD325F'
                        onClick={() => this.Remeberme(this)}
                        isChecked={this.state.isChecked}
                      />
                  
                    </View>
                    <View style={{   flexDirection: 'row' ,alignItems:'center',justifyContent:'center'}}>
                      <CheckBox
                        checkBoxColor='#FD325F'
                        onClick={() => this.Remeberme(this)}
                        isChecked={this.state.isChecked}
                      />
                  
                    </View>
              </View>
              
            </View>
              <View style={{marginTop:30,justifyContent:'space-around',flexDirection:'row'}}>
             <RNSpeedometer labels={this.state.labels} value={this.state.value} size={150}/>
             <RNSpeedometer labels={this.state.labels} value={this.state.values} size={150}/>
             </View>
             <View style={{marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
       
        alignItems: 'center',
       }} >
    <TouchableHighlight onPress={()=>{
        // Stop Animation
      //  this._waveRect && this._waveRect.stopAnim();

        // set water baseline height
        this._waveRect && this._waveRect.setWaterHeight(70);

        // reset wave effect
        this._waveRect && this._waveRect.setWaveParams([
            {A: 10, T: 180, fill: '#FF9F2E'},
            {A: 15, T: 140, fill: '#FF643C'},
            {A: 20, T: 100, fill: '#B36100'},
        ]);
    }}>
    <Wave
        ref={ref=>this._waveRect = ref}
        style={styles.wave}
        H={70}
        waveParams={[
            {A: 10, T: 180, fill: '#E8B212'},
            {A: 15, T: 140, fill: '#FD325F'},
            {A: 20, T: 100, fill: '#FF643C'},
        ]}
        animated={true}
    />
    </TouchableHighlight>
</View>
</View>
              </ScrollView>
</LinearGradient>
             
              </View>
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
  wave: {
    width: 250,
    marginTop:-100,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
},
waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
}
  
});