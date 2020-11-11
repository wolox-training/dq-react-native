import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
}

function GenericText(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

export default GenericText;
