import { StyleSheet, Text, TouchableOpacity, Image ,View} from 'react-native'
import { colors } from '../../config/theme';
import StyledText from '../../Components/Text/StyledText';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NewItem = ({image,title,avatar,author,content,date, ...props}) => {
    let activeColors = colors;
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>{
        navigation.navigate("Details",
        {
            image, title, avatar,author,content,date
        })
    }}
    style=
    {[{backgroundColor:activeColors.secondary},
    styles.container]}
    {...props}>

        <Image source={image} style={styles.image}/>

        <View style={styles.bottomSection}>
        <StyledText numberOfLines={3} style=
        {[{color:activeColors.accent}, styles.title]} bold>
            {title}
        </StyledText>
        <View style={styles.authorRow}>

            <View style={styles.author}>
                <Image source={avatar} style={styles.avatar}/>
                <StyledText numberOfLines={1} bold>{author}</StyledText>
            </View>

            <StyledText style=
            {[{color:activeColors.tertiary},styles.date]} 
            small>
                {date}
            </StyledText>
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default NewItem

const styles = StyleSheet.create({
    container:{
        height:270,
        width:240,
        borderRadius:25,
        marginRight:20
    },
    image:{
        flex:1,
        width: null,
        maxHeight:120,
        resizeMode: 'contain' ,
        borderRadius:25,
    },
    title:{
        fontSize:15,
    },
    bottomSection:{
        padding:25,
        flex:1,
        justifyContent:"space-between"
    },
    authorRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },  
    author:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:25,
        flex:3,
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:25,
        marginRight:10,
    },
    date:{
        textAlign:"right",
        flex:2,
    }
})  