import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, ImageBackground, Text, View } from 'react-native';
import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import actionCreators from '@redux/auth/actions';

import styles from './styles';

function LoginScreen() {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(actionCreators.logIn());
  };
  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.body}>
        <Image source={logo} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default LoginScreen;
