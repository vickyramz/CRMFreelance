import React from "react";
import { View, ScrollView,UIManager, ActivityIndicator, Text, StyleSheet, AsyncStorage ,LayoutAnimation, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Dimensions, TextInput ,Alert} from "react-native";
import FollowList from'../Components/FollowChild'
import {LoginAPI} from '../API/PostApi'
const width = Dimensions.get('window').width

export default class Follow extends React.Component {
    static navigationOptions =
        {
            header: null,
        };
        constructor(props) {
            super(props)
            if (Platform.OS === 'android')
            {
             UIManager.setLayoutAnimationEnabledExperimental(true)
             }
            this.state = {
                dataSource:[],
                total:{},
                animate: false,
                todaybc:'#fff',
                todayc:'#0a70ff',
                missedc:'#fff',
                futurec:'#fff',
                missedbc:'transparent',
                futurebc:'transparent'
            }
          
        }
     componentDidMount() {
        this.GetList()
    }
    GetList = async() => {

      let userId=await AsyncStorage.getItem('user_id')
      let params={
        user_id:"42"
      }
      this.Load()
      LoginAPI('http://got-crm.com/api/mobile/listEnquiries.php',params,this.successcallback,this.error,this.networkissue)
    }
    successcallback=async(data)=>{
        //console.log('Login Response--->',data)
        this.Hide()
        if(data.status){  
         console.log('Login Response--->',data)  
         this.setState({dataSource:data.todays_list,total:data})  
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
      update_Layout = (index) => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
        const array = [...this.state.dataSource];
    
        array[index]['expanded'] = !array[index]['expanded'];
    
        this.setState(() => {
          return {
            dataSource: array
          }
        });
      }
    TodayFollowups=()=>{
        this.setState({missedbc:'transparent',missedc:'#fff',todaybc:'#fff',todayc:'#0a70ff',futurebc:'transparent',futurec:'#fff',dataSource:this.state.total.todays_list})
    }
    MissedFollowups=()=>{
        this.setState({missedbc:'#fff',missedc:'#0a70ff',todaybc:'transparent',todayc:'#fff',futurebc:'transparent',futurec:'#fff',dataSource:this.state.total.missed_followups})
    }
    FutureFollowups=()=>{
        this.setState({futurebc:'#fff',futurec:'#0a70ff',todaybc:'transparent',todayc:'#fff',missedbc:'transparent',missedc:'#fff',dataSource:this.state.total.future_followups})
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
                <View style={styles.MainContainer}>
                {/* <Spinner
                        visible={this.state.animate}
                        textContent={'Loading...'}
                        overlayColor='rgba(0,0,0,0.5)'
                        animation='fade'
                        size='large'
                        color='#f4347f'
                        textStyle={styles.spinnerTextStyle}
                    /> */}
                    <ImageBackground source={require('../Assets/1--Menu.png')} style={{ width: '100%', height: '100%' }}>
                    <View>
                                <ImageBackground style={{ resizeMode: 'contain', width: width, height: 80, justifyContent: 'flex-start', padding: 10 }} source={require('../Assets/menu.png')}>
                                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.NavigationOpen} style={{ width: 40, height: 40, justifyContent: 'center' }}>
                      <View >
                        <Image style={{ resizeMode: 'contain', width: 30, height: 100 }} source={require('../Assets/ham.png')}></Image>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, fontFamily: 'TitilliumWeb-Bold', color: '#fff', textAlign: 'center' }}>Followups</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
           

                    </View>
                  </View>
                                </ImageBackground>
                            </View>

                        <View style={{ flex: 0.9 }}>
                            
                                <View >

                                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>

                                        <View style={{ height: 50, borderRadius: 30, backgroundColor: '#57abd0', margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.TodayFollowups()} style={{ flex: 0.5, backgroundColor:this.state.todaybc, justifyContent: 'center', height: '100%', alignItems: 'center', borderRadius: 30, paddingLeft: 10, paddingRight: 10 }}>
                                                <Text style={{ color:this.state.todayc, fontWeight: 'bold', fontSize: 16 }}>Today Followups</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.MissedFollowups()} style={{ flex: 0.5, backgroundColor:this.state.missedbc, justifyContent: 'center', height: '100%', alignItems: 'center', borderRadius: 30, paddingLeft: 10, paddingRight: 10 }} >
                                           
                                                <Text style={{ color:this.state.missedc, fontWeight: 'bold', fontSize: 16, }}>Missed followups</Text>
                                               
                                            </TouchableOpacity>
                                           
                                            <TouchableOpacity onPress={() => this.FutureFollowups()} style={{ flex: 0.5, backgroundColor:this.state.futurebc, justifyContent: 'center', height: '100%', alignItems: 'center', borderRadius: 30, paddingLeft: 10, paddingRight: 10 }} >
                                           
                                           <Text style={{ color:this.state.futurec, fontWeight: 'bold', fontSize: 16, }}>Future followups</Text>
                                          
                                       </TouchableOpacity>
                                         
                                        </View>
                                    </ScrollView>
                                </View>

                              <ScrollView contentContainerStyle={{}}>
                                {
            this.state.dataSource.length!=0? this.state.dataSource.map((item, key) =>
              (
                <FollowList  key={item.missed_followups} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              )):
              <View>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:15,fontFamily:'Exo2-Regular'}}>No Followups Found</Text>
              </View>
              </View>
           
          }
</ScrollView>

                          
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {
        color: '#fff'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    big_circle: {

        marginTop: 20,
        justifyContent: 'center', alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#fff',
        // borderColor:'#6add4a',
        // borderWidth : 2

    },

    small_circle: {

        marginTop: 10, marginLeft: -20,
        justifyContent: 'center', alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#fff'
    }
});