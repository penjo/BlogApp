import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React ,{Fragment} from 'react'
import Homescreen from '../screen/Homescreen';
import MainHeader from '../Components/MainHeader';
import  Icon  from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import {FontAwesome5} from "@expo/vector-icons";
import LoginScreen from '../screen/LoginScreen';
import Settings from '../screen/Settings';
import Notice from '../screen/Notice/Notice';
import Profile from '../screen/Profile';
import Menu from '../screen/Menu';
import { useNavigation } from '@react-navigation/native';
import Group from '../screen/Grouptab/Group';

const TabNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();
  return (
    <>
    <MainHeader 
      title={"BLOG APP "}
      title2={"Information Technology"}
      children={
        <View style={styles.main_icon}>
        <View style={styles.icon}>
        <Icon onPress={()=>{navigation.navigate("Search")}}
        name="search-outline"
        size={20}
        color="#FFFFFF"
        ></Icon>
        </View>
        <View style={styles.icon}>
          <Icon onPress={()=>{navigation.navigate("Posts")}}
            name="add-outline"
            size={20}
            color="#FFFFFF"
            >
            </Icon>
        </View>
        </View>
      }
      />
    <Tab.Navigator 
    screenOptions=
    {{
      tabBarShowLabel:false,
      tabBarPressColor: "transparent",
      tabBarIndicatorStyle:{  
        
      backgroundColor: '#1F2251',
      width: 40, left: (100 -40) / 2
      
    } 
    }}
    >
        <Tab.Screen name="Homescreen" component={Homescreen}
        options={{tabBarIcon: ({ focused }) =>(
              <Icon
              name="home"
              size={25}
              style={focused ? styles.cdTrue : styles.cdFalse} />
        )

      }}
        />
          <Tab.Group screenOptions={{headerShown:false,}}>
          <Tab.Screen name="Group" component={Group}
            options={{tabBarIcon: ({ focused }) =>(
              <Icon2
              name="account-group"
              size={25}
              style={
                focused ? styles.cdTrue: styles.cdFalse
              }
              />)}}/>


        <Tab.Screen name="Notice" component={Notice}
        options={{tabBarIcon:({ focused })=>(
          <Icon 
          name="notifications"
          size={25}
          style={
            focused ? styles.cdTrue: styles.cdFalse
          }
          />)}}/>
          <Tab.Screen name="MenuScreen" component={Menu}
          options={{tabBarIcon:({ focused })=>(
            <Icon name="list-outline" size={25}
            style={
              focused ? styles.cdTrue: styles.cdFalse
            }
            />)}}/>
        </Tab.Group>
    </Tab.Navigator>
    </>
  )
}

export default TabNavigation

const styles = StyleSheet.create({ 
  cdTrue:{
    color:'#080808',
    
  },
  cdFalse:{
    color:'#A8A8A8'
  },
  icon:{      
    margin:10,
    overflow:"hidden",
    width:30,
    height:30,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor:"#1F2251",
    borderColor:"#1F2251",
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_icon:{     
    alignContent:"center",
    alignItems: "center",
    flexDirection: "row",
  },
})