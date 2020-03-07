/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {  createAppContainer, createBottomTabNavigator, createSwitchNavigator, DrawerItems } from "react-navigation";
import SignIn from '../Container/LoginContainer/SignIn'

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
    contact: SignIn,
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
const BottomTab = createBottomTabNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:25,height:25,tintColor:tintColor}} source={require('../Container/Assets/contact-black.png')}></Image>
        ),
        activeColor: '#000',  
        inactiveColor: '#B3C3C3',  
        barStyle: { backgroundColor: '#fff' },  
      }
    },
    Enquires: {
      screen: Contacts,
      navigationOptions: {
        title: 'New Customer',
        tabBarLabel: 'New Customer',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:25,height:25,tintColor:tintColor}} source={require('../Container/Assets/contact-black.png')}></Image>
        ),
        activeColor: '#000',  
        inactiveColor: '#B3C3C3',  
        barStyle: { backgroundColor: '#fff' },  
      }
    },
    Schedule: {
      screen: Contacts,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',

        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{width:25,height:25,tintColor:tintColor}} source={require('../Container/Assets/contact-black.png')}></Image>
        ),
        activeColor: '#fff',  
        inactiveColor: '#A9A9A9',  
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
const authStack = createSwitchNavigator({
  Signin: { screen: SignIn },
  //Signup: { screen: Signup },
})
const container = createAppContainer(authStack)

export default container;
