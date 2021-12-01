import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Index } from './src';
const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Index></Index>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
