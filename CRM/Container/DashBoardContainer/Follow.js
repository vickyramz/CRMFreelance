import React from "react";
import { View, ScrollView, BackHandler, Text, StyleSheet, AsyncStorage , Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Dimensions, TextInput ,Alert} from "react-native";

const width = Dimensions.get('window').width

export default class Follow extends React.Component {
    static navigationOptions =
        {
            header: null,
        };
        constructor(props) {
            super(props)
            this.state = {
                animate: false,
                todaybc:'#fff',
                todayc:'#0a70ff',
                missedc:'#fff',
                futurec:'#fff',
                missedbc:'transparent',
                futurebc:'transparent'
            }
          
        }
   async componentDidMount() {
       
    }
    getMyPropertydetails = () => {

      
    }
    TodayFollowups=()=>{
        this.setState({missedbc:'transparent',missedc:'#fff',todaybc:'#fff',todayc:'#0a70ff',futurebc:'transparent',futurec:'#fff'})
    }
    MissedFollowups=()=>{
        this.setState({missedbc:'#fff',missedc:'#0a70ff',todaybc:'transparent',todayc:'#fff',futurebc:'transparent',futurec:'#fff'})
    }
    FutureFollowups=()=>{
        this.setState({futurebc:'#fff',futurec:'#0a70ff',todaybc:'transparent',todayc:'#fff',missedbc:'transparent',missedc:'#fff'})
    }
    NavigationOpen = () => {
        console.log('Navigation drawer open')
        this.setState({draweropen:!this.state.draweropen})
        this.props.navigation.toggleDrawer();
        //   this.props.navigation.toggleDrawer({
        //     side:'left',
        //     animated: true,
        //     to: 'closed',
        // });
      }
    render() {
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
                                           
                                           <Text style={{ color:this.state.futurec, fontWeight: 'bold', fontSize: 16, }}>Missed followups</Text>
                                          
                                       </TouchableOpacity>
                                         
                                        </View>
                                    </ScrollView>
                                </View>

                              
                                <ScrollView>
                                  
                             
                   
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