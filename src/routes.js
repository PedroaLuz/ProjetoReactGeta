import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main'
import Titans from './pages/page2'

const Stack = createStackNavigator();

export default function Routes(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Titans" component={Titans} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}