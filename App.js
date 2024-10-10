import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import AddItemPage from './src/screens/AddItemPage';
import FilterScreenPage from './src/screens/FilterScreenPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Add Item" component={AddItemPage} />
        <Stack.Screen name="Filter Menu" component={FilterScreenPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

