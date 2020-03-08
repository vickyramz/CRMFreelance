import React, { Component } from 'react';
import { View,StyleSheet ,FlatList,TouchableOpacity,Text,Image,TextInput,Animated} from 'react-native';
 let items = [{
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
export default class SearchUser extends Component {
    static navigationOptions = () => {
        return {
          header: null,
        
        }
      }
      constructor(props){
          super(props)
          this._visibility=new Animated.Value(0)
          this.state = {
            selectedItems :[],
            dataSource:items
          };
      }
 
  
 componentDidMount(){
    items = items.map(item => {
        item.isSelect = false;
        item.selectedClass = styles.list;
        
        return item;
      });

      this.setState({  dataSource:items})
 }
 selectItem = data => {
    this.animation()
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;
  
    const index = this.state.dataSource.findIndex(
      item => data.item.id === item.id
    );
    this.state.dataSource[index] = data.item;
    this.setState({
      dataSource: this.state.dataSource,
    });   
  };

  animation=()=>{
    console.log('this.state.dataSource.length',this.state.dataSource.length)
    Animated.timing(this._visibility, {
        toValue:this.state.dataSource.length>0?1:0,
        duration: 200,
        useNativeDriver:true
      }).start();
  }
  renderItem = (data) =>{
    console.log('data',data)
    return(
        <TouchableOpacity
        style={[styles.list, data.item.selectedClass]}      
        onPress={() => this.selectItem(data)}
      >
      <Text style={styles.lightText}>  {data.item.name.charAt(0).toUpperCase() + data.item.name.slice(1)}  </Text>
    </TouchableOpacity>
    )
  }

  
 

  FlatListItemSeparator = () => <View style={styles.line} />;
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
              <View style={{ flex: 0.2 }}>
            <View style={{padding:20}}>
                <Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>Search Attendees</Text>
            </View>
            <View style={{paddingHorizontal:20}}>
            <View style={styles.SectionStyle}>
          <Image 
            source={require('../Assets/search.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Search Attendees"
            underlineColorAndroid="transparent"
          />
        </View>
            </View>
            
            </View>
            <View style={{flex:0.8}}> 
            <FlatList
     data={this.state.dataSource}
    ItemSeparatorComponent={this.FlatListItemSeparator}
    renderItem={item => this.renderItem(item)}
    keyExtractor={item => item.id.toString()}
    extraData={this.state}
   /></View>
   <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
   <Animated.View style={{backgroundColor:'#FA7B5F',height:40,justifyContent:'center',alignItems:'center',
      transform: [
        {
          translateY: this._visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0],
          }),
        },
      ],}}>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Save</Text>

      </Animated.View>
   </TouchableOpacity>
      
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#192338",
      paddingVertical: 50,
      position: "relative"
     },
    title: {
      fontSize: 20,
      color: "#fff",
      textAlign: "center",
      marginBottom: 10
    },
    loader: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
    },
    list: {
      paddingVertical: 5,
      margin: 3,
      flexDirection: "row",
      backgroundColor: "#f3f3f3",
      justifyContent: "flex-start",
      alignItems: "center",
      zIndex: -1
    },
    lightText: {
      color: "#000",
      width: 200,
      paddingLeft: 15,
      fontSize: 12
     },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"rgba(255,255,255,0.5)"
    },
    icon: {
      position: "absolute",  
      bottom: 20,
      width: "100%", 
      left: 290, 
      zIndex: 1
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
    numberBox: {
      position: "absolute",
      bottom: 75,
      width: 30,
      height: 30,
      borderRadius: 15,  
      left: 330,
      zIndex: 3,
      backgroundColor: "#e3e3e3",
      justifyContent: "center",
      alignItems: "center"
    },
    number: {fontSize: 14,color: "#000"},
    selected: {backgroundColor: "#FA7B5F"},
    });