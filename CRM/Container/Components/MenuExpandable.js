

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TouchableSwipe from 'react-native-touchable-swipe'
import { Alert, LayoutAnimation,TouchableHighlight, StyleSheet,TouchableWithoutFeedback, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';

let datasource=[1]
export default class ExchangeMenu_Expandable extends Component {

    constructor() {
  
      super();
    
      this.state = {
        Updation:false,
        layout_Height: 0,
        userIdLogin:''
  
      }
    }
  
    componentWillReceiveProps(nextProps) {
      
      if(this.props.item!=nextProps)
      {
        this.setState(() => {
          return {
            Updation: true
          }
        });
      }
      if (nextProps.item.expanded) {
        this.setState(() => {
          return {
            layout_Height: null
          }
        });
      }
      else {
        this.setState(() => {
          return {
            layout_Height: 0
          }
        });
      }
    }


   
  
    shouldComponentUpdate(nextProps, nextState) {
       if(this.state.Updation)
      {
        return true;
      }
      if (this.state.layout_Height !== nextState.layout_Height ) {
        return true;
      }
      return false;
    }
    render() {

   
      return (
        <View >
           
          <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.handlePress(this.props.item)} onLongPress={this.props.onClickFunction}>
      
    
    
     
             <View 
  style={{ borderWidth: 0.5,flexDirection:'row', borderRadius: 40, borderColor: '#47b19a', height: 180, backgroundColor: '#6659B1', width: 200, marginLeft: 10, marginRight: 10,alignItems:'center',marginTop:10,justifyContent:'center',marginBottom:10 }}
  >
  <View style={{justifyContent:'center',alignItems:'center'}}>
  <Image style={{ width: 30, height: 30, resizeMode: 'contain' }}
      source={this.props.item.image}></Image>
  </View>
   <View style={{marginLeft:10}}>
   <Text numberOfLines={2} style={{textAlign:'center',color:'#fff',fontSize:15,fontWeight:'bold'}}>{this.props.item.name}</Text>
   </View>
   
  </View>
     

           

          
    
       
          </TouchableOpacity>
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' ,justifyContent:'center',alignItems:'center',}}>
         <View style={{width:120,height:40,backgroundColor:'#FC8101',justifyContent:'center',alignItems:'center',borderRadius:10,padding:10,}}> 
         <Text style={{color:'#000',alignItems:'center',fontSize:15}}>Remove</Text>
         </View>
 


         </View>
        </View>
        
          
  
      );
    }
  }
