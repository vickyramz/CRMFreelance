
import React, { Component } from 'react';


import { Alert, LayoutAnimation,TouchableHighlight, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';

let datasource=[1]
export default class FollowChild extends Component {

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
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
        <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
        <View
       style={{marginLeft:30,marginRight:30,marginBottom:20,height:100,backgroundColor:'#0a70ff', shadowOffset: { width: 10, height: 10 },
       borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',
        borderRadius:20}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>
    <View style={{flexDirection:'row'}}>
      <View style={{
     justifyContent:'center',alignItems:"center"}} >
      
    

          </View>
        
          <View style={{marginLeft:30,justifyContent:
        'space-around'}}>
        <View style={{paddingBottom:10,width:100}}>
        <Text numberOfLines={1} style={{flexWrap: 'wrap', marginRight:20,color:'#fff',}}>{this.props.item.followup_date}</Text>
        </View>
    <View>
    <Text  style={{marginRight:20,color:'#fff',}}>{this.props.item.followup_time}</Text> 
    </View>
        
     </View>
      </View>
      <View>
      <View style={{justifyContent:'space-between',paddingBottom:10}}>    
     
     <Text numberOfLines={1} style={{marginRight:20,color:'#fff',}}>{this.props.item.comments}</Text>    
    </View>
    <View style={{justifyContent:'space-between'}}>    
    
    <Text numberOfLines={1} style={{marginRight:20,color:'#fff',fontWeight:'bold'}}>{this.props.item.activity_status}</Text> 
    </View>
      </View>
      
    </View>
  
     
  
      
</View>

           

          
    
          </View>
          </TouchableOpacity>
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
<View>
<View style={{justifyContent:'center',alignItems:'center',marginBottom:10,width:"100%",flexDirection:'row'}}>
<TouchableOpacity  style={{width:"50%"}}>
<View >
<View   style={{borderColor:'#26e3ca', width:'100%',padding:12,borderWidth:0.8,justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>
<Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>{this.props.item.status}</Text>
</View>
</View>
</TouchableOpacity>

</View>


</View>



   </View>
        </View>
        
          
  
      );
    }
  }