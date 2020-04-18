import React from 'react'
import { StyleSheet, Image, Dimensions, TouchableOpacity, View } from 'react-native'

const gridItem = ({ item, navigation }: any): any => {
  return (
    <View>
      <TouchableOpacity onPress={(): any => navigation.navigate('ImageC', { img: item })}>
        <Image source={{ uri: item.previewURL }} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3
  }
})

export default gridItem
