import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'

const listItem = ({ item, navigation }: any): any => {
  return (
    <TouchableOpacity onPress={(): any => navigation.navigate('ImageC', { img: item })}>
      <ListItem
        key={item.id.toString()}
        title={<Text style={styles.title}>{item.user}</Text>}
        subtitle={<Text style={styles.subTitle}>{`Views:${item.views}\tLikes:${item.likes}`}</Text>}
        leftAvatar={{ source: { uri: item.previewURL }, rounded: true }}
        bottomDivider
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#155877',
    fontSize: 20
  },
  subTitle: {
    color: '#729AAD'
  }
})

export default listItem
