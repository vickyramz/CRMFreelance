//This is an example code to set Backgroud image///
import React from 'react';
//import react in our code. 
import { View, Text,Dimensions,TextInput, StyleSheet ,TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const WIDTH = Dimensions.get('window').width;
import DatePicker from 'react-native-datepicker'
import MultiSelect from 'react-native-multiple-select';
const ITEM_HEIGHT = 50;
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
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
export default class AddSchedule extends React.Component {
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
    this.props.props.navigation.navigate('SearchUser')
  }
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 ,padding:20}}>
        <View >
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Title</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
            <View style={{}}>
            <TextInput
            placeholder='Event Title'
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
            <Text style={{ fontSize: 16, color: '#000',  }}>Organizer</Text>
           
          </View>
            <View style={{}}>
            <TextInput
            placeholder='subhashree(Me)'
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
            <Text style={{ fontSize: 16, color: '#000',  }}>Description</Text>
          </View>
          <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Description"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>
        
         
      </View>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>start date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={this.state.date}
        mode="date"
        placeholder="start date"
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
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>End date</Text>
          </View>
          <DatePicker
        style={{width: 350}}
        date={this.state.date}
        mode="date"
        placeholder="End date"
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
      <View style={{marginTop:10}}>
         <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: '#000',  }}>Attendees</Text>
            <Text style={{ fontSize: 20, color: 'red',marginTop:-5  }}>*</Text>
          </View>
       
        <View>
          <TouchableOpacity onPress={()=>this.navigate()}>
          <View style={{}}>
            <TextInput
            editable={false}
            placeholder='subhashree(Me)'
        style=
        {{
          height: 40, borderColor: 'gray', borderWidth: 0.1, color : "blue",backgroundColor:'#f3f3f3'
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
         
          </View>
          </TouchableOpacity>
    
        </View>
       
      </View>
      </View>

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
      textArea: {
        height: 100,
        justifyContent: "flex-start"
      }
  });

