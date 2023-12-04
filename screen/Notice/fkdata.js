import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Group from '../Grouptab/Group';
import { DATA } from '../Grouptab/fkdata';
// import { Data } from './fkdata';
const Data = [
  {
      id: 1 ,
      name:"Nguyễn A",
      title:"thích bài của bạn",
      group:"Trong Group K25",
      image: require("../../img/logo-vlu.png"),
      time:"1 tiếng trước",
  },
  {
    id: 2 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},

{
      id: 3 ,
      name:"Nguyễn A",
      title:"thích bài của bạn",
      group:"Trong Group K25",
      image: require("../../img/logo-vlu.png"),
      time:"1 tiếng trước",
  },{
    id: 4 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},
{
    id: 5 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},
{
    id: 6 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},
{
    id: 7 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},
{
    id: 8 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},
{
    id: 9 ,
    name:"Nguyễn A",
    title:"thích bài của bạn",
    group:"Trong Group K25",
    image: require("../../img/logo-vlu.png"),
    time:"1 tiếng trước",
},

];


const Notifications = ({item}) => (
    
  <TouchableOpacity style={styles.item}>
    <ImageBackground source = {item.image} style={styles.avatar} 
     imageStyle={{ borderRadius: 64}}
    ><View style={styles.img}>
        <FontAwesome5Icon size={14} name="thumbs-up" color={'#318bfb'} >
        </FontAwesome5Icon>
    </View>
    </ImageBackground>
    <View>
    <Text style={styles.title}>
        {item.name} đã {item.title} trong {item.group} 
    </Text>
    <Text>{item.time}</Text>
    </View>
  </TouchableOpacity>
);
const Notice = () => {
    return (
      <View style={{flex:1}}>
      <SafeAreaView>
        <FlatList
          data={Data}
          keyExtractor={(item,index) => {
            return (index.toString())
          }}
          contentContainerStyle={styles.listView}
          // keyExtractor={item => item.id}
          renderItem={({item}) =>
          (
            <Notifications item={item}/>
          )}
        />
      </SafeAreaView>
      </View>
    ) 
  }
  export default Notice

const styles = StyleSheet.create({
  img:{
    position: 'absolute',
        bottom: -5,
        right: -5,
        height: 25,
        width: 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
  },
  item: {
    margin:5,
    flexDirection:"row",
    marginBottom: 10
  },
  title:{
    fontSize: 15,
    margin: 5,
    width:"80%"
  },
  avatar:{
    height: 64,
        width: 64,
        position: 'relative',
        borderRadius: 64,
        borderColor: "#ddd",
        borderWidth: 0.5,
  }
})