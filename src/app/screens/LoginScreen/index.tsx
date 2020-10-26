import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text } from 'react-native';
import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import actionCreators from '@redux/auth/actions';
import { isValidEmail, isValidPassword } from '@constants/utils';

import styles from './styles';

function LoginScreen() {
  const [userValue, onChangeUserText] = useState('');
  const [passwordValue, onChangePasswordText] = useState('');
  const [userError, onChangeUserError] = useState(false);
  const [passwordError, onChangePasswordError] = useState(false);
  const dispatch = useDispatch();
  const onPress = () => {
    onChangeUserError(!isValidEmail(userValue));
    onChangePasswordError(!isValidPassword(passwordValue));
    if (isValidEmail(userValue) && isValidPassword(passwordValue)) {
      dispatch(actionCreators.logIn());
    }
  };
  return (
    <ImageBackground style={styles.container} source={background}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.body}>
        <Image source={logo} />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserText(text)}
          value={userValue}
          placeholder={'user'}
        />
        {userError && <Text style={styles.error}>Invalid Email</Text>}
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePasswordText(text)}
          value={passwordValue}
          placeholder={'password'}
          secureTextEntry={true}
        />
        {passwordError && <Text style={styles.error}>Invalid Password</Text>}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default LoginScreen;
