import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewItem from './NewItem'

const NewSection = ({data}) => {
  return (
    <FlatList
        data={data}
        renderItem={({item})=><NewItem{...item} />}
        keyExtractor={({id})=> id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft:25,
            paddingTop:25,
            
        }}
    />
  )
}

export default NewSection

const styles = StyleSheet.create({

})