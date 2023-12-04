import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PostItem from './PostItem'

const NewPost = ({data}) => {
  return (
    <FlatList
        data={data}
        renderItem={({item})=><PostItem{...item} />}
        keyExtractor={({id})=> id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft:25,
            paddingTop:25,
            paddingRight:25,
        }}
    />
  )
}

export default NewPost

const styles = StyleSheet.create({

})