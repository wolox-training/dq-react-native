import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@components/AppNavigator';
import { ANDROID_STATUS_BACKGROUND } from '@constants/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={ANDROID_STATUS_BACKGROUND} translucent />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
