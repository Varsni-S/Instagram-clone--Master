import React from 'react';
import Providers from './src/Navigators';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}
