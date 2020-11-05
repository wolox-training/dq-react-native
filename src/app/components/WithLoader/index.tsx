import React from 'react';
import { CERULEAN } from '@constants/colors';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

function WithLoader({ loading, children }: { loading: boolean; children: JSX.Element }) {
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={CERULEAN} />
    </View>
  ) : (
    children
  );
}

export default WithLoader;
