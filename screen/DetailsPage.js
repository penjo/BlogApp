import { StyleSheet, Text, View,Image,Pressable,KeyboardAvoidingView, TouchableOpacity, ScrollView, TextInput, SafeAreaView  } from 'react-native'
import StyledText from '../Components/Text/StyledText';
import NavigationBack from '../Components/NavigationBack';
import  Icon  from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Octicons"
import { colors } from '../config/theme';
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DetailsPage = ({route}) => {
    let activeColors = colors;
    const [liked,setLiked] = useState(false);
    const insets = useSafeAreaInsets();
    const [text, onChangeText] = useState();
    const {
        image,
        title,
        avatar,
        author,
        content,
        date,}= route?.params;
    return (
        <View style={{flex:1}}>
            <ScrollView style={{ flex: 1,marginTop:insets.top}} >
                <NavigationBack />
                    <View style={styles.authorRow}>
                        <Image source={avatar} style={styles.avatar} />

                        <View style={styles.author}>
                            <StyledText bold>
                                {author}
                            </StyledText>
                            <StyledText style={[{ color: activeColors.tertiary }, styles.date]}
                                small>
                                {date}
                            </StyledText>
                        </View>

                    </View>
                <View style={styles.TopSection}>
                    <StyledText style={styles.title} bold>
                        {title}
                    </StyledText>
                    <View style={styles.sizedefault}>
                        <Image source={image} style={styles.image} />
                    </View>

                    <StyledText style={styles.content}>{content}</StyledText>
                </View>

                <View style={styles.icon}>
                    <TouchableOpacity style={styles.CPicon} onPress={() => setLiked((Liked) => !Liked)}>
                        <Icon name={liked ? "md-heart" : "md-heart-outline"}
                            size={22}
                            color={liked ? "red" : "black"} />
                            <Text style={{marginLeft:5}}>22</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ""} style={styles.CPicon}>
                        <Icon2 name="comment"
                            size={22} />
                        <Text style={{marginLeft:5}}>Bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ""} style={styles.CPicon}>
                        <Icon2 name="share"
                            size={22} />
                        <Text style={{marginLeft:5}}>Chia sẽ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                <View style={styles.bgcolor}>
                    <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={"Viết bình luận"}
                    placeholderTextColor={"#DCDCDC"}
                    />
                </View>
        </View>

  )
}

export default DetailsPage

const styles = StyleSheet.create({
    sizedefault:{
        paddingLeft:10,
        paddingRight:10,

    },
    image:{
        height:300,
        width: "100%",
        resizeMode:'contain',
        borderRadius:5,
    },
    title:{
        fontSize:15,
        paddingLeft:16,
        paddingRight:16,
        paddingBottom:8,
    },
    TopSection:{
      
    },
    authorRow:{
    flexDirection:"row",
    height: 80,
    },  
    author:{
      alignItems:"flex-start",
      marginLeft:20,
      marginTop:20,
    },
    avatar:{
        width:48,
        height:48,
        borderRadius:25,
        marginLeft:20,
        marginTop:20,
    },
    date:{
        textAlign:"right",

    },
    CPicon:{
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
        padding: 16,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    content:{
        paddingLeft:16,
        paddingRight:16,
        marginTop:10,
    },

    bgcolor:{
        backgroundColor:"#000000",

    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:"#363636",
        borderColor:"#4F4F4F",
        color:"#DCDCDC",
        padding: 10,
        borderRadius:20,
        
    },
})