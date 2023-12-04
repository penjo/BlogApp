import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
  const navigation=useNavigation();
  return (
    <View>
      <Text>Menu</Text>
      <TouchableOpacity
      style={[styles.button, styles.buttonOutLine]}
      onPress={() =>navigation.navigate("Login")}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  button: {
    backgroundColor:"#FFA500",
    width: "100%",
    padding: 15,
    alignItems:"center",
    borderRadius: 20,
},
buttonOutLine:{
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFA500",
    borderWidth: 2,
},
})