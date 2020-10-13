import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';
import { DETAIL_SCREEN, HOME_SCREEN } from '@constants/routes';
import { STATUS_BAR_COLOR } from '@constants/colors';

import { stackNavigatorConfig } from './config/navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={STATUS_BAR_COLOR} />
      <Stack.Navigator initialRouteName={HOME_SCREEN} screenOptions={stackNavigatorConfig}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={DETAIL_SCREEN} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
