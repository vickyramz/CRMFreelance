/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {  createAppContainer, createSwitchNavigator, DrawerItems } from "react-navigation";
import SignIn from '../Container/LoginContainer/SignIn'
import Contact from '../Container/AppContainer/Contact'
import AddContacts from '../Container/AppContainer/AddContacts'
import Calender from '../Container/AppContainer/Calender'
import SearchUser from '../Container/AppContainer/SearchUser'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Lead from '../Container/AppContainer/Lead'
import {createStackNavigator} from 'react-navigation-stack'
import { Image, View, Text, Alert,Dimensions,Easing,Animated } from 'react-native'
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
      //  collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position,width),
      }[transition];
    },
  }
}
let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY }
    ]
  };
};

const Contacts = createStackNavigator(
  {
    contact: Contact,
    AddContacts:AddContacts
     //Events:Events,
  },
  {
    transitionConfig: TransitionConfiguration,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: null,

    },
  }
);
const CalenderStack = createStackNavigator(
  {
    Calender: Calender,
    SearchUser:SearchUser
  },
  {
    transitionConfig: TransitionConfiguration,
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      title: null,

    },
  }
);
const LeadStack = createStackNavigator(
  {
    Lead: Lead,
  },
  {
    transitionConfig: TransitionConfiguration,
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      title: null,

    },
  }
);
const BottomTab = createBottomTabNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
        tabBarLabel: 'Contacts',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:20,height:20,tintColor:tintColor,resizeMode:'contain'}} source={require('../Container/Assets/contact-black.png')}></Image>
        ),
        activeColor: '#f39a3e',  
        inactiveColor: '#000',  
        barStyle: { backgroundColor: '#fff' },  
      }
    },
    Enquires: {
      screen: LeadStack,
      navigationOptions: {
        title: 'Enquires',
        tabBarLabel: 'Enquires',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:20,height:20,tintColor:tintColor,resizeMode:'contain'}} source={require('../Container/Assets/ic_supervisor_account_color.png')}></Image>
        ),
        activeColor: '#f39a3e',  
        inactiveColor: '#000',  
        barStyle: { backgroundColor: '#fff' },  
      }
    },
    Schedule: {
      screen: CalenderStack,
      navigationOptions: {
        title: 'Schedule',
        tabBarLabel: 'Schedule',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:20,height:20,tintColor:tintColor,resizeMode:'contain'}} source={require('../Container/Assets/calendar.png')}></Image>
        ),
        activeColor: '#f39a3e',  
        inactiveColor: '#000',  
        barStyle: { backgroundColor: '#E8B212' },  
      }
    },
  },
  // {
  //   initialRouteName: 'Home',
  //   activeColor: '#fff',
  //   inactiveColor: '#A9A9A92',
  //   barStyle: { backgroundColor: '#FD325F' },
  // }
);
const AuthStack=createStackNavigator({
  Signin: SignIn,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }  )
const AppStack=createStackNavigator({
  BottomTab: BottomTab,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }  )
const Containers = createSwitchNavigator({
    Auth:AuthStack,
    App:AppStack
  //Signup: { screen: Signup },
})
const container = createAppContainer(Containers)

export default container;
