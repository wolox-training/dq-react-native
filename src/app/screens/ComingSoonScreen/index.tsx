import React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from '@interfaces/navigation';

import styles from './styles';

interface LabelText {
  text: string;
}

function ComingSoonScreen({ route }: Navigation<LabelText>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.text}</Text>
    </View>
  );
}

export default ComingSoonScreen;
