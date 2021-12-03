import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { hotp } from 'otplib';

import styles from './styles';

const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';

function TokenGeneratorScreen() {
  const [token, onTokenChanged] = useState('??????');
  const [counter, onCounterChanged] = useState(0);
  const onPress = () => {
    onTokenChanged(hotp.generate(secret, counter));
    onCounterChanged(counter + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{token}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.textButton]}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TokenGeneratorScreen;
