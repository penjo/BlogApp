import React, {useRef}from 'react';
import {
  SafeAreaView,
  View,

  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const DATA = [
  {
    id: '1',
    title: 'Group Công Nghệ Thông Tin',
    image: require("../../img/nice.jpg"),
    stillon: "2 tháng"
  },
  {
    id: '2',
    title: 'Group Trao Đổi Kiến Thức',
    image: require("../../img/nice.jpg"),
    stillon: "1 ngày"
  },
  {
    id: '3',
    title: 'Group Thể Thao',
    image: require("../../img/nice.jpg"),
    stillon: "1 tuần"
  },
  {
    id: '4',
    title: 'Group CLB IT',
    image: require("../../img/nice.jpg"),
    stillon: "1 giờ"
  },
  {
    id: '5',
    title: 'Group Văn Học',
    image: require("../../img/nice.jpg"),
    stillon: "19 giờ"
  },
  {
    id: '6',
    title: 'Group Trao Đổi Tài Liệu Học',
    image: require("../../img/nice.jpg"),
    stillon: "1 giây"
  },
  {
    id: '7',
    title: 'Group K25',
    image: require("../../img/nice.jpg"),
    stillon: "1 năm"
  },
  {
    id: '8',
    title: 'Group K26',
    image: require("../../img/nice.jpg"),
    stillon: "9 tháng"
  },
  {
    id: '9',
    title: 'Group K27',
    image: require("../../img/nice.jpg"),
    stillon: "10 ngày"
  },
  {
    id: '10',
    title: 'Group Văn Lang',
    image: require("../../img/nice.jpg"),
    stillon: "1 phút"
  },
  {
    id: '11',
    title: 'Group Ngôn Ngữ Anh',
    image: require("../../img/nice.jpg"),
    stillon: "23 giờ"
  },
  {
    id: '12',
    title: 'Group Bơi Lội',
    image: require("../../img/nice.jpg"),
    stillon: "3 giờ"
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.img}/>
    <View >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>Lần hoạt động gần đây {item.stillon} trước</Text>
    </View>
  </View>
);

const Fakedata = () => {
  // const flatlistRef = useRef(null)
  // const [loading, setloading] = useState(true);
  return (
    
    <SafeAreaView>
      <FlatList 
        // ref={flatlistRef}
        data={DATA}
        renderItem={({item}) => (<Item item={item} />)}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{height: 20}}/>}
      />
    </SafeAreaView>
    
       
   
  );
};

const styles = StyleSheet.create({
  container: {
    
    width:"100%",
    height:"100%"
  },
  item: {

    margin:5,
    flexDirection:"row",
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    margin: 5,
 
  },
  img:{
    width:60, 
    height:60,
    borderRadius:30,

  }
});

export default Fakedata;