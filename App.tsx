import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Index } from './src';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const queryClient = new QueryClient()
const IndexStack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer initialState={{
      type: 'stack',
      key: 'stack-1',
      routeNames: ['Index'],
      routes: [
        { name: 'Index'}
      ],
      index: 1,
    }}>
      <QueryClientProvider client={queryClient}>
        <Index></Index>
      {/* <IndexStack.Navigator>
        <IndexStack.Screen 
        
        
        name='Index' component={Index}></IndexStack.Screen>
      </IndexStack.Navigator> */}
      </QueryClientProvider>
    </NavigationContainer>
  );
}