import React from 'react';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAILSCREEN, HOMESCREEN } from '@constants/screenNames';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOMESCREEN}>
        <Stack.Screen name={HOMESCREEN} component={HomeScreen} />
        <Stack.Screen name={DETAILSCREEN} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
