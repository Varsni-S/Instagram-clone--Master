import React from 'react';
import Providers from './src/Navigators';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}
