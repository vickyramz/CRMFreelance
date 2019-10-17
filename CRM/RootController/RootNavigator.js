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
import CardScanner from '../Container/DashBoardContainer/CardScanner'
import CreateCustomer from '../Container/DashBoardContainer/CreateCustomer'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideMenu from '../Container/Components/SideMenu'
import { Image, View, Text, Alert,Dimensions } from 'react-native'

const HomeTab = createStackNavigator(
  {
    Home: HomeScreen,
    CardScanner:CardScanner,
    CreateCustomer:CreateCustomer
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
  drawerWidth: Dimensions.get('window').width - 130,
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
