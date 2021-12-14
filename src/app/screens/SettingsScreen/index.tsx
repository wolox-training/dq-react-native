import { getBiometricsFlag, storeBiometricsFlag } from '@services/LocalStorage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import * as Keychain from 'react-native-keychain';

function SettingsScreen() {
    const [buttonEnabled, onButtonChanged] = useState(false);
    useEffect(() => {
        getBiometricsFlag().then((value) => onButtonChanged(value ?? false))
      }, []);
    const onPress = () => {
        Keychain.resetGenericPassword().then(() => {
            console.warn('Credentials removed')
            storeBiometricsFlag(false)
        }).catch(() => console.warn('Couldn\'t remove credentials'))
    };
        
    return (<View style={styles.container}>
        <TouchableOpacity disabled={!buttonEnabled} style={styles.buttonContainer}
              onPress={onPress}>
            <Text style={[styles.button, !buttonEnabled && styles.disabledButton]}>Stop remembering credentials</Text>
        </TouchableOpacity>
    </View>);
}

export default SettingsScreen;
