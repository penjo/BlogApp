import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/native";
import DisplayAnImage from '../img/img'
import NavigationBack from '../Components/NavigationBack';
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
        
        <DisplayAnImage/>

        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text) }
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>
        <View style={{
                padding:10,
                alignSelf:"flex-end",
                width:"50%",
            }}>
            <Text>
                Forgot your password ?
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={() => {navigation.navigate("Home") }}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {navigation.navigate("Register") }}
            style={[styles.button, styles.buttonOutLine]}
        >
            <Text style={styles.buttonOutLineText}>Đăng Ký</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 100,
    },

inputContainer: {
    width:"80%",
    margin:5,
    },
input: {
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:20,
    marginTop:10,
},
buttonContainer: {
    width:"60%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    flexDirection:"row",
},
button: {
    backgroundColor: "#1F2251",
    width: 120,
    padding: 15,
    alignItems:"center",
    borderRadius: 20,
    margin:15,
},
buttonOutLine:{
    backgroundColor: "rgba(31, 34, 81, 0.15)",
    margin: 15,
},
buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
},

buttonOutLineText:{
    color:"#1f2251",
    opacity:1,
    fontWeight:"700",
    fontSize: 16,
},
})