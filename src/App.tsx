import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
// import styled from 'styled-components/native'
import { CompetitionIndex } from './screens/data/index';
const queryClient = new QueryClient()

const App = () => {


  return (
  <>
    <QueryClientProvider client={queryClient}>
    <Text>5555asd</Text>
    <CompetitionIndex></CompetitionIndex>
    </QueryClientProvider>

  </>
  )
}



 
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

export default App;
