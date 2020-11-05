import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { CERULEAN } from '@constants/colors';

import styles from './styles';

interface Props {
  loading: boolean;
  children: JSX.Element;
}

function WithLoader(props: Props) {
  return props.loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={CERULEAN} />
    </View>
  ) : (
    props.children
  );
}

export default WithLoader;
