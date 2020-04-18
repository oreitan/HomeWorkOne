import React from 'react'
import { View, AsyncStorage, StyleSheet, FlatList } from 'react-native'
import GridItem from '../vmode/gridItem'

const getStorage = async (key: string): Promise<any> => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.log('get error: ', error)
  }
}

const Fav = ({ navigation }: any): any => {
  const [res, setRes] = React.useState([])
  const numC = 3
  React.useEffect((): any => {
    ;(async (): Promise<any> => {
      let allfavs = await getStorage('fav')
      console.log('test: ', allfavs)

      if (allfavs !== null) {
        allfavs = JSON.parse(allfavs)
        setRes(allfavs)
      }
    })()
  }, [])

  return (
    <View style={styles.main}>
      <View style={styles.content}>
        {console.log(res)}
        <FlatList
          data={res}
          renderItem={({ item, index }): any => (
            <GridItem navigation={navigation} key={index.toString()} item={item}></GridItem>
          )}
          numColumns={numC}
          keyExtractor={(item): string => item.id.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  main: {
    flex: 1
  }
})

export default Fav
