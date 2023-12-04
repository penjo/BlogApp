import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position:"relative",
  },
  Logo: {
    width: 200,
    height: 143,
    marginBottom:20,
  },
});

const DisplayAnImage = () => {
  return (
<View style={styles.container}>
            <Image 
            style={styles.Logo}
            source={require("../img/VLU.png")}
            />
        </View>
  )}

  export default DisplayAnImage;