import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../vmode/listItem'

const List = ({ data, navigation }: any): any => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }: any): any => (
        <ListItem navigation={navigation} key={index.toString()} item={item}>
          {' '}
        </ListItem>
      )}
      keyExtractor={(item: string): any => item.id.toString()}
    />
  )
}

export default List
