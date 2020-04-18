import React from 'react'
import { FlatList, View } from 'react-native'
import GridItem from '../vmode/gridItem'

const Grid = ({ data, navigation }: any): any => {
  const numC = 3
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }: any): any => (
          <GridItem navigation={navigation} key={index.toString()} item={item}></GridItem>
        )}
        numColumns={numC}
        keyExtractor={(item: string): any => item.id.toString()}
      />
    </View>
  )
}

export default Grid
