import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, ImageBackground, Text, View } from 'react-native';
import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import actionCreators from '@redux/auth/actions';

import styles from './styles';

function LoginScreen() {
  const [userValue, onChangeUserText] = useState('');
  const [passwordValue, onChangePasswordText] = useState('');
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(actionCreators.logIn());
  };
  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.body}>
        <Image source={logo} />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserText(text)}
          value={userValue}
          placeholder={'user'}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePasswordText(text)}
          value={passwordValue}
          placeholder={'password'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default LoginScreen;
