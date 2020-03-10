//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,TextInput,Image, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import { Chevron, Heart, Triangle } from 'react-native-shapes'

import Icon from 'react-native-vector-icons/FontAwesome';
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
import RNPickerSelect from 'react-native-picker-select';
const workout = {key:'workout', color: 'green'};
const 
items = [{
  id: '92iijs7yta',
  name: 'Ondo',
}, {
  id: 'a0s0a8ssbsd',
  name: 'Ogun',
}, {
  id: '16hbajsabsd',
  name: 'Calabar',
}, {
  id: 'nahs75a5sg',
  name: 'Lagos',
}, {
  id: '667atsas',
  name: 'Maiduguri',
}, {
  id: 'hsyasajs',
  name: 'Anambra',
}, {
  id: 'djsjudksjd',
  name: 'Benue',
}, {
  id: 'sdhyaysdj',
  name: 'Kaduna',
}, {
  id: 'suudydjsjd',
  name: 'Abuja',
}];
export default class AddEnquiry extends React.Component {
    static navigationOptions = () => {
        return {
          header: null,
        }
      }
      
  constructor(props){
    super(props);
    this.arrayholder = [];
    this.state={EmailAddress:'',Password:'',selectedItems : [],
    dataSource:[],}
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  navigate=()=>{
    this.props.onShut()
    const {props}= this.props
    props.navigation.navigate('SearchUser')
  }
  render() {
    const placeholder = {
      label: 'Select Contact',
      value: null,
      color: '#000',
    };
    const { selectedItems } = this.state;
    return (
        <ScrollView contentContainerStyle={{paddingBottom:30}} style={{flex:1}}>
      <View style={{ flex: 1 ,padding:20}}>
          <TouchableOpacity onPress={()=>this.props.onShut()}>
          <View style={{alignSelf:'flex-end'}}>
              <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../Assets/close.png')}></Image>
          </View>
          </TouchableOpacity>
        
        <View >
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
              placeholder={placeholder}
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>First Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='First Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Last Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Last Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Company Name</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Company Name'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Contact Person</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Contact Person'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Phone </Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <TextInput
            placeholder='Phone '
            keyboardType={'numeric'}
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Alternate Phone</Text>
            
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Alternate Phone'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        keyboardType={'name-phone-pad'}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}> Email</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Email'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Alternate Email</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Alternate Email'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Address Line 1</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Address Line 1'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Address Line 2</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Address Line 2'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Country</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>State</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>City</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='City'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Postal Code</Text>
           
          </View>
          <View style={styles.textAreaContainer} >
          <TextInput
            placeholder='Postal code'
           
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Lead Source</Text>
           
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Assign to</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <RNPickerSelect
             
            style={{ ...pickerSelectStyles,
              
              iconContainer: {
                top: 20,
                right: 15,
              },
                placeholder: {
                  color: 'gray',
                  fontSize: 12,
                  fontWeight: 'bold',
                },}}
            onValueChange={(value) => console.log(value)}
            items={[
               
                { label: 'New 2020', value: 'New 2020' },
                { label: 'A8', value: 'A8' },
                { label: 'A9', value: 'A0' },
                { label: 'A10', value: 'A10' },
                { label: 'Edwin group', value: 'Edwin group' },

            ]}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
        />
         
          </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Followup date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={this.state.date}
        mode="date"
        placeholder="Choose date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            backgroundColor:'#f3f3f3'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        
         
      </View>
      <TouchableOpacity onPress={()=>this.props.onShut()}>
      <View style={{backgroundColor:'#f39a3e',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Save</Text>
      </View>
    <View style={{paddingLeft:10}}>
 
    </View>
    

    </View>
      </TouchableOpacity>
   <TouchableOpacity onPress={()=>this.props.onShut()}>
   <View style={{backgroundColor:'#6c757d',height:40,justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'row'
      
    }}>
      <View>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Cancel</Text>
      </View>
    <View style={{paddingLeft:10}}>
 
    </View>
    

    </View>
   </TouchableOpacity>
   
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor:'grey',
        borderWidth: 0.1,
        backgroundColor:'#f3f3f3',
        padding: 5
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
      textArea: {
        height: 100,
        justifyContent: "flex-start"
      }
  });
  const pickerSelectStyles = StyleSheet.create({
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
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      backgroundColor:'#f3f3f3',
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

