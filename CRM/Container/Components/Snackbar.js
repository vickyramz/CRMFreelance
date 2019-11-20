
import React, { Component } from 'react';

import { Alert,Animated, LayoutAnimation,Dimensions, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';
const width=Dimensions.get('window').width
export default class Snackbar extends Component {

    constructor() {
  
      super();
    
      this.state = {
         Shown:false,
          animated:new Animated.Value(0)
        
      }
    }
componentDidMount()
{
    console.log('component did mount','cccoming')
    this.setState({Shown:this.props.Visible})  
    this.SnackbarAction() 
       
}
componentWillReceiveProps(nextProps)
{
    this.setState({Shown:nextProps.Visible})  
  
}
  
// shouldComponentUpdate(nextProps,nextState)
// {
//     if(nextProps.AlertVisible!=this.props.AlertVisible)
//     {
//         //this.SnackbarAction()
       
//         return true
//     }
//     return false
// }
      
   
   SnackbarAction=()=>
   {
   
        Animated.timing(this.state.animated,{
            toValue:this.state.Shown?1:0,
            duration:500
        }).start() 
   }
   


   
    render() {
       this.SnackbarAction() 
        console.log('render function','it is comming')
      return (
       <Animated.View style={{position:'absolute',justifyContent:'space-between', bottom:0,backgroundColor:this.props.color,width:width,flexDirection:'row', transform:[{
           translateY:this.state.animated.interpolate({
               inputRange:[0,1],
               outputRange:[150,1]
           })
       }]}}>
           <View style={{justifyContent:'center',padding:20,paddingRight:20}}>
               <Text style={{color:'#fff',fontWeight:'bold'}}>{this.props.alert}</Text>

           </View>
           <View style={{justifyContent:'center',padding:20,paddingRight:20}}>
               <Image style={{width:30,height:30,tintColor:'#fff'}} source={this.props.image}></Image>

           </View>
       </Animated.View>
          
  
      );
    }
  }