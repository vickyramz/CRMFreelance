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
import Signup from '../Container/LoginContainer/SignUp'
import HomeScreen from '../Container/DashBoardContainer/HomeScreen'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideMenu from '../Components/SideMenu'
import { Image, View, Text, Alert } from 'react-native'

const HomeTab = createStackNavigator(
  {
    Home: HomeScreen,
     //Events:Events,
  },

  {
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
  drawerLockMode: 'locked-closed'
},


)
const authStack = createSwitchNavigator({
  Signin: { screen: SignIn },
  Signup: { screen: Signup },

   Dashboard: Drawer
})
const container = createAppContainer(authStack)

export default container;
