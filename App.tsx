import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Index } from './src';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from './src/sceens/data/detail';
// import { Linking } from './src/screen-config/linking';
const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator screenOptions={{orientation: 'portrait'}}>
          <Stack.Screen name='Index' component={Index} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='Details' component={Details}></Stack.Screen>
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}