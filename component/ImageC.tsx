import React from 'react'
import { StyleSheet, View, Image, AsyncStorage, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const setStorage = async (key: string, value: string): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log('set error: ', error)
  }
}

const getStorage = async (key: string): Promise<any> => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.log('get error: ', error)
  }
}

const ImageC = ({ route }: any): any => {
  const img = route.params.img
  const [fav, setfav] = React.useState(false)

  React.useEffect(() => {
    ;(async (): Promise<any> => {
      let allfavs = await getStorage('fav')
      if (allfavs !== null) {
        allfavs = JSON.parse(allfavs)
        allfavs.forEach((element) => {
          if (element.id === img.id) {
            setfav(true)
            return
          }
        })
      }
    })()
  })

  const addfav = async (): Promise<any> => {
    try {
      let allfavs = await getStorage('fav')
      if (allfavs === null) {
        allfavs = [img]
        console.log('in if: ', allfavs)
        setfav(true)
      } else if (!fav) {
        allfavs = JSON.parse(allfavs)
        allfavs.push(img)
        setfav(true)
      }

      await setStorage('fav', JSON.stringify(allfavs))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.con}>
        <Image source={{ uri: img.largeImageURL }} style={styles.image}></Image>
        <TouchableOpacity
          onPress={async (): Promise<any> => {
            await addfav()
          }}
        >
          {!fav ? (
            <Icon name="star" style={styles.icon}></Icon>
          ) : (
            <Icon name="star" color="red" style={styles.icon}></Icon>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '80%',
    width: '80%'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  con: {
    width: '100%',
    marginLeft: '20%',
    marginTop: '20%'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ImageC
