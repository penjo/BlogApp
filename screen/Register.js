import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/native";
import DisplayAnImage from '../img/img'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [account, setAccount] =useState('')
    const navigation = useNavigation()
    return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
        <DisplayAnImage/>

        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Tên tài khoản"
            onChangeText={text => setAccount(text) }
            style={styles.input}
            />
            <TextInput
            placeholder="Email sinh viên"
            value={email}
            onChangeText={email => setEmail(email) }
            style={styles.input}
            />
            <TextInput
            placeholder="Mật khẩu"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={() => {navigation.navigate("Home")}}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Đăng Ký</Text>
            </TouchableOpacity>

            <View>

            <Text style={{textAlign:"center"}}>
            Đã có tài khoản rồi?
            </Text>

                <TouchableOpacity onPress={() => {navigation.navigate("Login") }}>
                <View>
                <Text style={styles.buttonOutLineText}>Đăng nhập ngay</Text>
                </View>
                </TouchableOpacity>

            </View>
        </View>
    </KeyboardAvoidingView>
  )
}
export default Register

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
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
    marginTop:20,
},
buttonContainer: {
    width:"60%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
},
button: {
    backgroundColor:"#1F2251",
    width: 120,
    padding: 15,
    alignItems:"center",
    borderRadius: 20,
    margin:15,
},
buttonOutLine:{
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFA500",
    borderWidth: 2,
},
buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
},

buttonOutLineText:{
    color:"#1F2251",
    fontWeight:"700",
    fontSize: 16,
    margin:10,
    textDecorationLine: 'underline',
    textAlign:"center"
},
})