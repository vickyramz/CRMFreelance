import React from "react";
import { View, Image, Text,TouchableWithoutFeedback, ScrollView,Easing,TouchableHighlight,AsyncStorage,FlatList, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, Alert } from "react-native";

import {LoginAPI} from '../API/PostApi'
const SCREEN_HEIGHT = Dimensions.get('window').height
import Spinner from 'react-native-loading-spinner-overlay';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import DraggableList from 'react-native-draggable-list';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import Dialog, {SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import RNPickerSelect from 'react-native-picker-select';
import Pie from 'react-native-pie'
import PureChart from 'react-native-pure-chart';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import CheckBox from 'react-native-check-box'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Wave from 'react-native-waveview'
import ImagePicker from 'react-native-image-picker';
import { PieChart } from 'react-native-svg-charts'
import CircleTransition from 'react-native-expanding-circle-transition'
const ANIMATION_DURATION = 1200
const INITIAL_VIEW_BACKGROUND_COLOR = '#E3E4E5'
const CIRCLE_COLOR1 = '#29C5DB'
const CIRCLE_COLOR2 = '#4EB8AE'
const CIRCLE_COLOR3 = '#81C781'
const CIRCLE_COLOR4 = '#B0D882'
const TRANSITION_BUFFER = 10
const POSITON = 'custom'
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

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 80;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
let data = [  
    {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
    }
];
let sampleData = [
  {
    value: 60,
    label: 'Connected',
    color: '#FD325F',
  }, {
    value: 40,
    label: 'Not Connected',
    color: '#E8B212'
  },
  
]
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
      viewBackgroundColor: INITIAL_VIEW_BACKGROUND_COLOR,
      circleColor: CIRCLE_COLOR1,
      customLeftMargin: 0,
      customTopMargin: 0,
      counter: 0,
      activeBlock: null,
      itemsPerRow: 1,
      itemHeight: 150,
      visible:false,
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
      dataSource:[
{name:'Auto  RSP',id:1,image:require('../Assets/timetable.png')},
{name:'Tank Stock',id:2,image:require('../Assets/increasing-stocks-graphic.png')},
{name:'MPD Connectivity',id:3,image:require('../Assets/bar.png')},
{name:'EDC Connectivity',id:4,image:require('../Assets/edc.png')},
{name:'Product Wise Sales',id:5,image:require('../Assets/timetable.png')},
{name :'MOP',id:6,image:require('../Assets/timetable.png')},
{name:'VSAT/SIM Connectivity',id:7,image:require('../Assets/timetable.png')}
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
    dataList: [
      {

       // ShadowImages: require('./assets/etherem.png'),

        title: "Alerts",
        unreadAlerts:'unread :9',
        description:'Lists of exceptions triggered by the server and the alarms genrated from your outlet',
        backgroundColor:'#FD325F',
        image:require('../Assets/radiation.png')
      },
      {
       // ShadowImages: require('./assets/bshadow.png'),
       title: "Last Active",
       description:'Last Active status for your tanks,mdps,bays',
       backgroundColor:'#FF643C',
       image:require('../Assets/energy.png')
      },
       {
        // ShadowImages:require('./assets/bitwingslogowallet.png'),
        title: "Top Customers",
        description:'you top customer based on fuelling amount/quantity/count',
        backgroundColor:'#E8B212',
        image:require('../Assets/cup.png')
       }

    ],
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
    this.handlePress = this.handlePress.bind(this)
    this.changeColor = this.changeColor.bind(this)
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
  handlePress (event) {
    let pressLocationX = event.nativeEvent.locationX
    let pressLocationY = event.nativeEvent.locationY
    this.setState({
      customLeftMargin: pressLocationX,
      customTopMargin: pressLocationY
    }, this.circleTransition.start(this.changeColor))
  }
  renderSeparator=(item)=>{
    return(
      <View style={{backgroundColor:'#fff',height:1}}></View>
    )
  }
  renderList = ({item}) => {
    

    return (
      <TouchableWithoutFeedback
          style={styles.touchable}
          onPress={this.handlePress}>
                 <View Elevation={5}
      style={{ borderWidth: 0.5,padding:20, borderRadius: 10, borderColor: '#C1C1C1',  backgroundColor: '#fff', marginLeft: 10, marginRight: 10, marginTop: 10, }}
      >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View>
<Text style={{color:'#000',fontSize:12,fontWeight:'bold'}}>{item.title}</Text>
       <Text  numberOfLines={4} style={{fontSize:11,color:'#C1C1C1',width:200}}>{item.description}</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center'}}>
       <Text  numberOfLines={4} style={{fontSize:11,color:'#C1C1C1'}}>{item.unreadAlerts}</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Image style={{ width: 30, height: 30, resizeMode: 'contain' }}
          source={item.image}></Image>
          </View>
        </View>
      
      </View>
          </TouchableWithoutFeedback>
 
    );
  };
  renderItem = ({item}) => {
    

    return (
      <TouchableWithoutFeedback
          style={styles.touchable}
          onPress={this.handlePress}>
                 <View
      style={{ borderWidth: 0.5, borderRadius: 40, borderColor: '#47b19a', height: 180, backgroundColor: '#6659B1', width: 200, marginLeft: 10, marginRight: 10,justifyContent:'center',alignItems:'center' }}
      >
         {/* <CircleTransition
          ref={(circle) => { this.circleTransition = circle }}
          color={this.state.circleColor}
          expand
          customTopMargin={this.state.customTopMargin}
          customLeftMargin={this.state.customLeftMargin}
          transitionBuffer={TRANSITION_BUFFER}
          duration={ANIMATION_DURATION}
          easing={Easing.linear}
          position={POSITON}
        /> */}
        <Image style={{ width: 50, height: 50, resizeMode: 'contain' }}
          source={item.image}></Image>
       <Text style={{textAlign:'center',color:'#fff',fontSize:17,fontWeight:'bold',marginTop:10}}>{item.name}</Text>
      </View>
          </TouchableWithoutFeedback>
 
    );
  };
  changeColor () {
    const { circleColor, counter } = this.state
    let newCounter = counter < 3 ? counter + 1 : 0
    let newCircleColor = this.getColor(newCounter)
    this.setState({
      viewBackgroundColor: circleColor,
      counter: newCounter
    })
    this.changeCircleColor(newCircleColor)
  }
 
  changeCircleColor (newCircleColor) {
    this.setTimeout(() => {
      this.setState({
        circleColor: newCircleColor
      })
    }, TRANSITION_BUFFER + 5)
  }
  error=(error)=>{
    this.Hide()
    Alert.alert(error.status,error.message)
  }
  networkissue=(error)=>{
    Alert.alert('Failure',error)
  }
  _onPressHandler() {
    Keyboard.dismiss()
    this.loadingButton.showLoading(true);
  
    // mock
    setTimeout(this.nav,2000);
  }
  nav=()=>{
    this.loadingButton.showLoading(false);
  }
  renderNavBar = () => (
    <View style={{flex:0.11}}>
                                <View style={{backgroundColor:'#FF7E06',justifyContent:'center',height:60}} >
                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding:10 }}>
                    <TouchableOpacity  style={{ width: 40, height: 40, justifyContent: 'center' }}>
                      {/* <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100 }} source={require('../Assets/ham.png')}></Image>
                      </View> */}
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, color: '#fff',fontWeight:'bold'}}>Tank Stock</Text>
                    </View>
                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <View>
                      <Image style={{ resizeMode: 'contain', width: 30, height: 30,tintColor:'#fff' }} source={require('../Assets/exclamation.png')}></Image>
                      </View>
                      <View>
                      <Image style={{ resizeMode: 'contain', width: 30, height: 30,tintColor:'#fff',marginLeft:10 }} source={require('../Assets/alarm.png')}></Image>
                      </View>
                       
                      </View>
                  </View>
                                </View>
                            </View>
  )
  renderContent=()=>(
    <View style={{flex:0.89}}>
         
          <LinearGradient
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{flex:1}}>   
         <ScrollView contentContainerStyle={{paddingBottom:30}} style={{flex:1}}>
           <View style={{flex:1}}>
           
  
         
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Dialog
 dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
  onTouchOutside={() => {
      this.setState({ visible: false })
    }}
          visible={this.state.visible}>
          <DialogContent>
            <View style={{width:300,height:300 }}>
           <View>
           <RNPickerSelect
                         placeholder={{
                          label: 'Region',
                          value: 'Region',
                          color: '#000',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        //onValueChange={(itemValue, itemIndex) => this.selected1(itemValue, itemIndex)}
                        items={[
                          { label: "ETH-BTC", value: "ETH-BTC" },
						     { label: "BTC-ETH", value: "BTC-ETH" },
                        
                        ]}
                      />

                       <RNPickerSelect
                         placeholder={{
                          label: 'State',
                          value: 'State',
                          color: '#fff',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        //onValueChange={(itemValue, itemIndex) => this.selected1(itemValue, itemIndex)}
                        items={[
                          { label: "ETH-BTC", value: "ETH-BTC" },
						     { label: "BTC-ETH", value: "BTC-ETH" },
                        
                        ]}
                      />
                       <RNPickerSelect
                         placeholder={{
                          label: 'Territory',
                          value: 'Territory',
                          color: '#fff',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        //onValueChange={(itemValue, itemIndex) => this.selected1(itemValue, itemIndex)}
                        items={[
                          { label: "ETH-BTC", value: "ETH-BTC" },
						     { label: "BTC-ETH", value: "BTC-ETH" },
                        
                        ]}
                      />
   

   <RNPickerSelect
                         placeholder={{
                          label: 'Sales Area',
                          value: 'Sales Area',
                          color: '#fff',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        //onValueChange={(itemValue, itemIndex) => this.selected1(itemValue, itemIndex)}
                        items={[
                          { label: "ETH-BTC", value: "ETH-BTC" },
						     { label: "BTC-ETH", value: "BTC-ETH" },
                        
                        ]}
                      />
                         <RNPickerSelect
                         placeholder={{
                          label: 'RO',
                          value: 'RO',
                          color: '#fff',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        //onValueChange={(itemValue, itemIndex) => this.selected1(itemValue, itemIndex)}
                        items={[
                          { label: "ETH-BTC", value: "ETH-BTC" },
						     { label: "BTC-ETH", value: "BTC-ETH" },
                        
                        ]}
                      />
                         <View style={{ paddingTop: 10, paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}>
                  <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={200}
          height={50}
          title="Submit"
          titleFontSize={16}
          titleColor="#fff"
          backgroundColor="#FD325F"
          borderRadius={10}
          onPress={this._onPressHandler.bind(this)}
        />
                  </View>
           </View>
            </View>
          
                  
                
                    
          </DialogContent>
        </Dialog> 
          </View>
           </View>
          <View style={{flex:1}}>
          {/* <View>
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
          </View> */}
          {/* <View style={{padding:10}}>
          <Text style={{ fontSize: 15, color: '#000',fontWeight:'bold'}}>Good Morning Abishek kumar!</Text>
          </View> */}
              <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              <Text style={{ fontSize: 15, color: '#000',fontWeight:'bold'}}>Auto RSP</Text>
              <View style={{flexDirection:'row'}}> 
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{ resizeMode: 'contain', width: 15, height: 15,tintColor:'#FD325F' }} source={require('../Assets/refresh-button.png')}></Image>
              </View>
             
              <Text style={{ fontSize: 12, color: '#000',fontWeight:'bold',marginLeft:10}}>Last Updated Date 20/11/2017</Text>
              </View>
            
              </View>
              <View style={{alignSelf:'flex-end',marginTop:10,padding:10}}>
                <TouchableOpacity onPress={()=>this.setState({visible:true})}>
                <View style={{width:200,height:39,borderWidth:1,borderColor:'#FD325F',borderRadius:5,justifyContent:'center',padding:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <Text style={{ fontSize: 12, color: '#000',fontWeight:'bold',marginLeft:10}}>Sales area-chennai</Text>
                    </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../Assets/drop-down-arrow.png')} resizeMode='contain' style={{width:15,height:15,tintColor:'#FD325F'}}></Image>
                    </View>
                  </View>
               
                </View>
                </TouchableOpacity>
               
             
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
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
           {Platform.OS === 'ios' ? <Pie
          radius={100}
          innerRadius={50}
          series={[60,40]}
          colors={['#FD325F', '#E8B212']} />:<PureChart   data={sampleData} type='pie' />} 
            </View>
         
           
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
            <View>
          <Pie
            radius={50}
            innerRadius={45}
            series={[60]}
            colors={['#FD325F']}
            backgroundColor='#ddd' />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>60%</Text>
          </View>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center'}}>Connected</Text>
          </View>
          <View>
          <Pie
            radius={50}
            innerRadius={45}
            series={[40]}
            colors={['#E8B212']}
            backgroundColor='#ddd' />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>40%</Text>
          </View>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:12,textAlign:'center'}}>Not-Connected</Text>
          </View>
          </View>
          
        </View>
</View>
              </ScrollView>
</LinearGradient>
             
              </View>
  )

  
  NavigationOpen = () => {
    console.log('Navigation drawer open')
   // this.props.navigation.navigate('Home');
      this.props.navigation.toggleDrawer({
        side:'left',
        animated: true,
        to: 'closed',
    });
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
      {/* <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={90}
        extraScrollHeight={20}
        navbarColor="#FD325F"
        title="Auto RSP"
        titleStyle={styles.titleStyle}
       // backgroundImage={images.background}
        backgroundImageScale={1.2}
        renderNavBar={this.renderNavBar}
        renderContent={this.renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      /> */}
      {this.renderNavBar()}
      {this.renderContent()}

    
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
},
container: {
  flex: 1,
},
contentContainer: {
  flexGrow: 1,
},
navContainer: {
  height: HEADER_HEIGHT,
  marginHorizontal: 10,
},
statusBar: {
  height: STATUS_BAR_HEIGHT,
  backgroundColor: 'transparent',
},
navBar: {
  height: NAV_BAR_HEIGHT,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: 'transparent',
},
titleStyle: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18,
},
gauge: {
  position: 'absolute',
  width: 100,
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',
},
gaugeText: {
  backgroundColor: 'transparent',
  color: '#000',
  fontSize: 24,
},
});