import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Notice from './fkdata'
// import { Data } from './fkdata';

const NoticePage = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.topWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Thông Báo</Text>
            <TouchableOpacity /*onPress={() => navigation.navigate("GroupSearch")} style={styles.btnSearch}*/ >
              <Icon size={20} name="search"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      <Notice/>
    </View>
  ) ;
};

export default NoticePage

const styles = StyleSheet.create({
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
})
