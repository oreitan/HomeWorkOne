import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './component/Home'
import ImageC from './component/ImageC'
import Fav from './component/Fav'

const Stack = createStackNavigator()

const App = (): any => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="ImageC" component={ImageC} options={{ title: 'imgas' }} />
        <Stack.Screen name="Fav" component={Fav} options={{ title: 'Fav' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
