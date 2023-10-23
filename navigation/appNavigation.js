import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import startScreen from '../screens/startScreen';
import FitnessScreen from '../screens/FitnessScreen';
import { LogBox, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start" options={{headerShown: false}} component={startScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Gym" options={{headerShown: false}} component={FitnessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
