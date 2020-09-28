import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { WHITE } from '@constants/colors';
import HomeScreen from '@screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
