import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Fakedata from "./fkdata"
import Img from "../../img/VLU.png"
const Group = () =>{

  const navigation=useNavigation();
  
  return (

    <><View style={styles.container}>
      <ScrollView >
        <View style={styles.topWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Group</Text>
            <TouchableOpacity onPress={() => navigation.navigate("GroupSearch")} style={styles.btnSearch}>
              <Icon size={20} name="search"></Icon>
            </TouchableOpacity>
          </View>
          <ScrollView bounces={false} style={styles.navigationWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.navigatorItem}>
              <Icon name="people-outline" size={20}>
              </Icon>
              <Text style={styles.navigatorText}>My Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigatorItem}>
              <Icon name="newspaper-outline" size={20}>
              </Icon>
              <Text style={styles.navigatorText}>Bài Viết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigatorItem}>
              <Icon name="person-add-outline" size={20}>
              </Icon>
              <Text style={styles.navigatorText}>Lời mời vào Group</Text>
            </TouchableOpacity>
          </ScrollView>
          
        </View>
      </ScrollView>
    </View>
    <View style={{flex:1}}>
      <Fakedata />
    </View>
    </>
   

     )
   }
   

export default Group

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  topWrapper: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
},
titleWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  alignItems: 'center',
  marginBottom:10,
},
title: {
  fontSize: 24,
  fontWeight: 'bold'
},
btnSearch: {
  backgroundColor: '#ddd',
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50
},
navigatorWrapper: {
  marginTop: 10,
  paddingHorizontal: 15,
},
navigatorItem: {
  paddingHorizontal: 16,
  paddingVertical: 8,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#ddd',
  borderRadius: 48,
  marginRight: 10
},
navigatorText: {
  fontSize: 16,
  marginLeft: 8,
  fontWeight: '500'
},
})
