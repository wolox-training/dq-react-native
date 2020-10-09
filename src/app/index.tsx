import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { STATUS_BAR_COLOR } from '@constants/colors';

import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={STATUS_BAR_COLOR} />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
