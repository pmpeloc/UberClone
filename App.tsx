import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { HomeScreen } from './src/screens';

// 1) Set up redux

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
