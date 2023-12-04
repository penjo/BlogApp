import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Icon  from "react-native-vector-icons/Ionicons";
import LoginScreen from "./screen/LoginScreen";
import MainHeader from "./Components/MainHeader";
import TabNavigation from "./Nagivation/TabNavigation";
import CustomTabBar from "./Nagivation/DrawerNagivation";
import DetailsPage from "./screen/DetailsPage";
import Register from "./screen/Register";
import Notice from "./screen/Notice/Notice";
import CreatePosts from "./screen/CreatePosts";
import SearchFilter from "./screen/Search/SearchFilter";
import GroupSearch from "./screen/Search/GroupSearch";
import Menu from "./screen/Menu";
const Stack = createNativeStackNavigator();

export default function App(){
  if (__DEV__) {
    const ignoreWarns = ["VirtualizedLists should never be nested inside plain ScrollViews"];
  
    const errorWarn = global.console.error;
    global.console.error = (...arg) => {
      for (const error of ignoreWarns) {
        if (arg[0].startsWith(error)) {
          return;
        }
      }
      errorWarn(...arg);
    };
  }
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {<Stack.Screen name="Home" component={TabNavigation} />}
        {<Stack.Screen name="MenuScreen" component={Menu}/>}
        {<Stack.Screen name="Posts" component={CreatePosts}/>}
        { <Stack.Screen name="Details"
        
        component={DetailsPage}/>}
        {<Stack.Screen name="Notice" component={Notice}/>}


        {<Stack.Screen name="Search" component={SearchFilter}/>}
        {<Stack.Screen name="GroupSearch" component={GroupSearch}/>}









        {/* Login/Regisiter */}
        <Stack.Group>
        {<Stack.Screen name="Login" component={LoginScreen}
        options={{
          headerShown: true,
          title: 'Đăng nhập', 
          headerTitleAlign: 'center'
        }}
        />}
        {<Stack.Screen name="Register" component={Register} 
        options={{
          headerShown: true,
          title: 'Đăng Ký', 
          headerTitleAlign: 'center'
        }}
        />} 
        </Stack.Group>

      </Stack.Navigator>  
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingtop:0,
    alignSelf:"center",
    justifyContent:"center",
  },
});
