import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
const App = (props) => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
    </View>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
      alignment: 'center'
    },
    background: {
      color: '#303133',
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default App;
