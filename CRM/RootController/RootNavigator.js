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
import HomeScreen from '../Container/DashBoardContainer/HomeScreen'
import CardScanner from '../Container/DashBoardContainer/CardScanner'
import Follow from '../Container/DashBoardContainer/Follow'
import Enquiry from '../Container/DashBoardContainer/Enquiry'
import CreateCustomer from '../Container/DashBoardContainer/CreateCustomer'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideMenu from '../Container/Components/SideMenu'
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
        //collapseExpand: CollapseExpand(index, position),
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

const HomeTab = createStackNavigator(
  {
    Home: HomeScreen,
    CardScanner:CardScanner,
    CreateCustomer:CreateCustomer,
    Follow:Follow,
    Enquiry:Enquiry,
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

const Drawer = createDrawerNavigator({
  Tabs: { screen: HomeTab },

}, {
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width - 130,
  drawerLockMode: 'locked-closed'
},


)
const authStack = createSwitchNavigator({
  Signin: { screen: SignIn },
  //Signup: { screen: Signup },

   Dashboard: Drawer
})
const container = createAppContainer(authStack)

export default container;
