import React from 'react';
import 'react-native-gesture-handler';

import Main from './src/pages/Main'
import Details from './src/pages/Details'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main"
          component={Main}
          options={{ title: 'Explore' }}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}