import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native'

const apiUrl = process.env.REACT_APP_API_URL || ''

// Initialize Apollo Client
const client = new ApolloClient({
  uri: `${apiUrl}`,
  cache: new InMemoryCache()
});
const App = () => (
  <ApolloProvider client={client}>
    <View>5555</View>
  </ApolloProvider>
)


// const Button = styled.View`
// align-items: center;
// position: relative;
// background: #666;
// `
App.options = {
  topBar: {
    title: {
      text: 'Snow',
      color: 'black',
      alignment: 'center'
    },
    background: {
      color: '#f0fcff',
    },
    leftButtons: [
      {
        id: 'rightButtons',
        text: 'avatar'
      },
    ],
    rightButtons: [
      {
        id: 'leftbuttons',
        text: 'button'
      }
    ]
  },
};

Navigation.registerComponent('App', () => App);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});


export default App;
