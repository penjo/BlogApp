import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import CustomTabBar from '../Nagivation/DrawerNagivation'
import { SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context'
import  Icon  from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const MainHeader = ({title,title2,children}) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop:insets.top}]}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image style={{width:35,height:35,marginRight:5,}}
      source={require("../img/logo-vlu.png")}/>
      <View>
        
        <Text style={styles.title}
        >{title}</Text>
        <Text style={styles.title2}
        >{title2}</Text>
  
        </View>
      </View>
      <View>{children}</View>
    </View>

  )
}

export default MainHeader

const styles = StyleSheet.create({
  container:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    paddingLeft: 10,
    backgroundColor:"#FFFFFF",
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowRadius: 4,
    // shadowOpacity: 0.25
  },
  icon:{      
    margin:10,
    overflow:"hidden",
    borderRadius:10,
    borderWidth: 2,
    borderColor:"#FFFFFF"
  },
  main_icon:{     
    alignContent:"center",
    alignItems: "center",
    flexDirection: "row",
  },
  title:{
    fontSize: 15,
    fontWeight:700,
    color:"#D72134"
  },
  title2:{
    fontSize:15,
    fontWeight:400,
    color:"#D72134"

  }
})