import React from 'react';
import { CERULEAN } from '@constants/colors';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

function WithLoader(Component: (props: any) => JSX.Element, loading: boolean, props: any) {
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={CERULEAN} />
    </View>
  ) : (
    <Component {...props} />
  );
}

export default WithLoader;
