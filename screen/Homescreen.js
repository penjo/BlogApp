import { StyleSheet, Text, View,Button, SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../Components/Text/StyledText'
import NewSection from './News/NewSection'
import NewPost from './News/NewPost'
import { postData } from '../config/data'
import MainHeader from '../Components/MainHeader'
import  Icon  from "react-native-vector-icons/Ionicons"
const Homescreen = () => {
  const navigation=useNavigation();
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <MainHeader
    title={"BLOG APP "}
    title2={"Information Technology"}
    children={
      <View style={styles.main_icon}>
      <View style={styles.icon}>
      <Icon onPress={()=>{navigation.navigate("Notice")}}
      name="search-outline"
      size={24}
      color="#FFFFFF"
      ></Icon>
      </View>
      <View style={styles.icon}>
        <Icon onPress={()=>{navigation.navigate("Posts")}}
          name="add-outline"
          size={24}
          color="#FFFFFF"
          >
          </Icon>
      </View>
      </View>
      
    }
    /> */}
      <StyledText style={styles.sectionTitle} big>Hot Hôm Nay</StyledText>
      <NewSection data={postData} />
      <StyledText style={styles.sectionTitle} big>Bảng tin</StyledText>
      <NewPost data={postData}/>
    </ScrollView>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
   
  },
  sectionTitle:{
    marginTop:25,
    marginLeft:25,
  },
icon:{      
  margin:10,
  overflow:"hidden",
  borderRadius:20,
  borderWidth: 2,
  backgroundColor:"#1F2251",
  borderColor:"#1F2251"
},
main_icon:{     
  alignContent:"center",
  alignItems: "center",
  flexDirection: "row",
},
title:{
  fontSize: 15,
  fontWeight:"bold",
  color:"#000000"

},
})