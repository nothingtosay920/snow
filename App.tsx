import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CompetitionIndex } from './src/sceens/data/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Search } from './src/components/base/search';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen
          name="Competition"
          component={CompetitionIndex}
          options={{ 
            title: 'base',
            headerRight: () => (<Search></Search>)
          }}
        />
      </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
