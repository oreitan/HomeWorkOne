import React from 'react'
import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import axios from 'axios'
import Grid from '../vmode/Grid'
import List from '../vmode/List'

const setStorage = async (key: string, value: string): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log('set error: ', error)
  }
}

const Home = ({ navigation }: any): any => {
  const [searchText, setSearchText] = React.useState('')
  const [res, setRes] = React.useState([])
  const [mode, setMode] = React.useState('List')
  const [loding, setLoding] = React.useState(false)

  const search = async (): Promise<any> => {
    try {
      setLoding(true)
      const respons = await axios.get('https://pixabay.com/api/', {
        params: {
          key: '15993552-25bf4148c73dadbf0dd0f241c',
          q: searchText
        }
      })
      setStorage('quary', searchText)
      setStorage('searchRes', JSON.stringify(respons.data.hits))
      setRes(respons.data.hits)
      setSearchText('')
    } catch (error) {
      console.log(error)
    } finally {
      setLoding(false)
    }
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.btn} onPress={(): any => navigation.navigate('Fav')}>
        <Text style={styles.text}>Fav</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={(text: string): any => setSearchText(text)}
        value={searchText}
      >
      </TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={async (): Promise<any> => {
          await search()
        }}
      >
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={(): any => {
          setMode(mode === 'Grid' ? 'List' : 'Grid')
        }}
      >
        <Text style={styles.text}>{mode === 'Grid' ? 'List' : 'Grid'}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {loding ? (
          <View style={styles.indicator}>
            <ActivityIndicator size={'large'} color={'#2fcccc'} />
          </View>
        ) : res.length > 0 ? (
          mode === 'Grid' ? (
            <Grid data={res} navigation={navigation} />
          ) : (
            <List data={res} navigation={navigation} />
          )
        ) : (
          <Text style={styles.text}>no res</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  btn: {
    color: '#a3a1a1',
    padding: 5,
    margin: 3
  },
  content: {
    flex: 1
  },
  main: {
    flex: 1
  },
  indicator: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
