import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react';
import NavigationBack from '../Components/NavigationBack';
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation} from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';

const CreatePosts = () => {
  const placeholderImage=require("../img/nice.jpg");
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  

    const navigation=useNavigation();
    const insets = useSafeAreaInsets();
  return (
    <><SafeAreaView>
      <View style={[styles.headerContainer, { marginTop: insets.top }]}>
        <NavigationBack />
        <TouchableOpacity onPress={()=>console.log(title,text)}>
          <Text style={styles.headerText}>Đăng bài</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image style={styles.avatar} source={placeholderImage}/>
        <Text>Trần Văn A</Text>
        </View>
        <TextInput style={styles.title}
          onChangeText={setTitle}
          value={title}
          placeholder='Tiêu đề' />
        <TextInput style={styles.text}
          onChangeText={setText}
          value={text}
          placeholder='Bạn đang nghĩ gì'
          multiline />
      </View>
    </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.icon}>
          <TouchableOpacity>
          <Icon name="image-outline" size={25} style={{margin:12}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="videocam-outline" size={25} style={{margin:12}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="options-outline" size={25} style={{margin:12}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="location-outline" size={25} style={{margin:12}}/>
          </TouchableOpacity>

        </View>
      </View>
      </>
  )
}

export default CreatePosts

const styles = StyleSheet.create({
    avatar:{
      width:48,
      height:48,
      borderRadius:25,
      margin:12
    },
    headerContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
      
    },
    headerText:{
      color:"#FFFFFF",
      borderWidth:1,
      padding:4,
      fontSize:15,
      marginRight:25,
      borderRadius:20,
      backgroundColor:"#1F2251",
    },
    title:{
      height: 40,
      margin: 12,
      fontSize:25,
      fontWeight:"bold",
     
    },
    text:{
      margin: 12,
      fontSize:16,
    },
    footer:{
      flex: 1,
      justifyContent: 'flex-end',
      margin: 12,
    },
    icon:{
      flexDirection:"row",
      
    }
  })