/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
// import {AppRegistry} from 'react-native';
import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('Home', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {name: 'Home'},
          },
        ],
      },
    },
  });
});
