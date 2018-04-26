import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryOrange: '#d57855',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',

  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
  // $outline: 1,
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
