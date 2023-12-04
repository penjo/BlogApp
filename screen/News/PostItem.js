import { StyleSheet, Text, TouchableOpacity, Image ,View,TextInput} from 'react-native'
import { colors } from '../../config/theme';
import StyledText from '../../Components/Text/StyledText';
import  Icon  from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Octicons"
import React, {useState}from 'react'
import { useNavigation } from '@react-navigation/native';

const PostItem = ({image,title,avatar,author,content,date, ...props}) => {
    let activeColors = colors;
    const [liked,setLiked] = useState(false);
    const [text, onChangeText] = useState();
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

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
                <TouchableOpacity><Icon name="bookmark-outline" size={22} style={{ marginTop: 20 }} /></TouchableOpacity>  
              </View>
              <TouchableOpacity
                  onPress={() => {
                      navigation.navigate("Details",
                          {
                              image, title, avatar, author, content, date
                          });
                  } }
                  style={[{ backgroundColor: activeColors.secondary }]}
                  {...props}>
          <View style={styles.TopSection}>
              <StyledText style={styles.title} bold>
                  {title}
              </StyledText>
              <View style={styles.sizedefault}>
                  <Image source={image} style={styles.image} />
              </View>

              <StyledText style={styles.content}>{content}</StyledText>
          </View>
      </TouchableOpacity><View style={styles.icon}>
              <TouchableOpacity style={styles.CPicon} onPress={() => setLiked((Liked) => !Liked)}>
                  <Icon name={liked ? "md-heart" : "md-heart-outline"}
                      size={22}
                      color={liked ? "red" : "black"} />
                  <Text style={{ marginLeft: 5 }}>22</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => ""} style={styles.CPicon}>
                  <Icon2 name="comment"
                      size={22} />
                  <Text style={{ marginLeft: 5 }}>Bình luận</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => ""} style={styles.CPicon}>
                  <Icon2 name="share"
                      size={22} />
                  <Text style={{ marginLeft: 5 }}>Chia sẽ</Text>
              </TouchableOpacity>
          </View><View
              style={styles.bgcolor}>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder={"Viết bình luận"}
                  placeholderTextColor={"#363636"} />
          </View>
    </View>
  )
}

export default PostItem

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        borderRadius:25,
        flex:1,
        marginBottom:10,
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
    backgroundColor: "#FFFFFF"
    },  
    author:{
      alignItems:"flex-start",
      marginLeft:20,
      marginTop:20,
      width:200,
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
        backgroundColor:"#FFFFFF",
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
        backgroundColor:"#FFFFFF",
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:"#E8E8E8",
        borderColor:"#4F4F4F",
        color:"#363636",
        padding: 10,
        borderRadius:20,
        
    },
})