import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native'
const App = (props) => {
  return <Button><Text>5555</Text></Button>
};

const Button = styled.View`
align-items: center;
position: relative;
background: #666;
`
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
