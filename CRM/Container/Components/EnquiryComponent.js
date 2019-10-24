
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
     //console.log('Poduct details',this.props.item.product_details)
      
      return (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
        <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
        <View
       style={{marginLeft:30,marginRight:30,marginBottom:20,height:100,backgroundColor:'#283462', shadowOffset: { width: 10, height: 10 },
       borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',
        borderRadius:20}}>
    <View style={{justifyContent:'space-between',padding:20,}}>
    <View style={{flexDirection:'row'}}>
      <View style={{
     justifyContent:'center',alignItems:"center"}} >
      
    

          </View>
        
          <View style={{marginLeft:30,justifyContent:
        'space-around',flexDirection:'row'}}>
        <View style={{paddingBottom:10}}>
        <Text numberOfLines={1} style={{flexWrap: 'wrap', marginRight:20,color:'#fff',}}>Invoice Number</Text>
        </View>
    <View>
    <Text  style={{marginRight:20,color:'#fff',}}>{this.props.item.invoice_no}</Text> 
    </View>
        
     </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{
     justifyContent:'center',alignItems:"center"}} >
      
    

          </View>
        
          <View style={{marginLeft:30,justifyContent:
        'space-around',flexDirection:'row'}}>
        <View style={{paddingBottom:10}}>
        <Text numberOfLines={1} style={{flexWrap: 'wrap', marginRight:20,color:'#fff',}}>Date</Text>
        </View>
    <View>
    <Text  style={{marginRight:20,color:'#fff',}}>{this.props.item.date_created}</Text> 
    </View>
        
     </View>
      </View>
      
    </View>
  
     
  
      
</View>

           

          
    
          </View>
          </TouchableOpacity>
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' ,marginTop:-10}}>
<View style={{paddingLeft:30,paddingRight:30}}>
<View style={{marginBottom:10,backgroundColor:'#40d99e'}}>
<View style={{}}>
<View style={{padding:10}}>
      <Text  style={{marginRight:20,color:'#fff',fontSize:13,fontWeight:'bold'}}>Brand Name</Text> 
         <View style={{}}>
  
   
   
   {this.props.item.brand_name.map((item,key)=>
(
  <Text style={{marginRight:20,color:'#000',fontSize:10}}>->  {item}</Text>
)
)}
    
</View>
</View>
<View style={{padding:10}}>
      <Text  style={{marginRight:20,color:'#fff',fontSize:13,fontWeight:'bold'}}>Product Details</Text> 
         <View style={{}}>
  
   
   
   {this.props.item.product_details.map((item,key)=>
(
  <Text style={{marginRight:20,color:'#000',fontSize:10}}>->  {item}</Text>
)
)}
    
</View>
</View>

</View>
<View style={{}}>
<View style={{padding:10}}>
      <Text  style={{marginRight:20,color:'#fff',fontSize:13,fontWeight:'bold'}}>Price</Text> 
         <View style={{}}>
  <Text style={{marginRight:20,color:'#000',fontSize:10}}>->  {this.props.item.price}</Text>  
</View>
</View>

</View>
<View style={{}}>
<View style={{padding:10}}>
      <Text  style={{marginRight:20,color:'#fff',fontSize:13,fontWeight:'bold'}}>Discount</Text> 
         <View style={{}}>
  <Text style={{marginRight:20,color:'#000',fontSize:10}}>->  {this.props.item.discount}</Text>  
</View>
</View>

</View>
<View style={{}}>
<View style={{padding:10}}>
      <Text  style={{marginRight:20,color:'#fff',fontSize:13,fontWeight:'bold'}}>GST</Text> 
         <View style={{}}>
  <Text style={{marginRight:20,color:'#000',fontSize:10}}>->  {this.props.item.gst}</Text>  
</View>
</View>

</View>
</View>


</View>



   </View>
        </View>
        
          
  
      );
    }
  }