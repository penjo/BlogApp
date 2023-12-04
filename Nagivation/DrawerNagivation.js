import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../screen/Homescreen';
import Text1 from '../screen/Search/SearchFilter';
import LoginScreen from '../screen/LoginScreen';
import TabNavigation from './TabNavigation';
import CreatePosts from '../screen/CreatePosts';
import Notice from '../screen/Notice/Notice';
import SearchFilter from '../screen/Search/SearchFilter';
const Drawer = createDrawerNavigator();

export default function CustomTabBar () {
  return (
      <Drawer.Navigator initialRouteName="Homescreen" screenOptions={{headerShown: false }} >
        <Drawer.Screen name="Homescreen" component={""}/>
       
      </Drawer.Navigator>
  );
}