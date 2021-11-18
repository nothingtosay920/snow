import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions 
} from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components/native';
// import styled from 'styled-components/native'
import { CompetitionIndex } from './screens/data/index';
const queryClient = new QueryClient()

const App = () => {
  console.log(Dimensions.get('window').height);
  

  return (
  <>
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}></View>
    <Separation ></Separation>
    <CompetitionIndex></CompetitionIndex>
    </QueryClientProvider>

  </>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
});

const Separation = styled.View`
height: 100px;
width: 100px;
background: red;
`
 
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
