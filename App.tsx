import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/redux/store';
import { HomeScreen } from './src/screens';

// 1) Set up redux
// 2) HomeScreen
// 3) NavOptions

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
