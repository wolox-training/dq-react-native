/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BookCell from './src/app/components/BookCell';

const App: () => React$Node = () => {
  return (
    <View style={styles.cell}>
      <BookCell></BookCell>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "red"
  }
});

export default App;
