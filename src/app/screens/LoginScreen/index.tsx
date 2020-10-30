import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';
import actionCreators from '@redux/auth/actions';
import { isValidEmail, isValidPassword } from '@constants/utils';

import styles from './styles';

function LoginScreen() {
  const [userValue, onChangeUserText] = useState('');
  const [passwordValue, onChangePasswordText] = useState('');
  const [userError, onChangeUserError] = useState(false);
  const [passwordError, onChangePasswordError] = useState(false);
  const [buttonEnabled, onButtonChanged] = useState(false);
  const dispatch = useDispatch();
  const handleUserEndEditing = () => {
    onChangeUserError(!isValidEmail(userValue));
  };
  const handlePasswordEndEditing = () => {
    onChangePasswordError(!isValidPassword(passwordValue));
  };
  const handleUserChange = (text: string) => {
    onChangeUserText(text);
    onButtonChanged(isValidEmail(userValue) && isValidPassword(passwordValue));
  };
  const handlePassChange = (text: string) => {
    onChangePasswordText(text);
    onButtonChanged(isValidEmail(userValue) && isValidPassword(passwordValue));
  };
  const onPress = () => {
    dispatch(actionCreators.logIn());
  };
  return (
    <ImageBackground style={styles.container} source={background}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.body}>
        <Image source={logo} />
        <TextInput
          style={styles.input}
          onChangeText={handleUserChange}
          onEndEditing={handleUserEndEditing}
          onSubmitEditing={Keyboard.dismiss}
          value={userValue}
          placeholder="user"
        />
        {userError && <Text style={styles.error}>Invalid Email</Text>}
        <TextInput
          style={styles.input}
          onChangeText={handlePassChange}
          onEndEditing={handlePasswordEndEditing}
          onSubmitEditing={Keyboard.dismiss}
          value={passwordValue}
          placeholder="password"
          secureTextEntry
        />
        {passwordError && <Text style={styles.error}>Invalid Password</Text>}
        <TouchableOpacity
          disabled={!buttonEnabled}
          style={[styles.button, !buttonEnabled && styles.disabledButton]}
          onPress={onPress}>
          <Text style={[styles.buttonText, !buttonEnabled && styles.disabledButtonText]}>LOG IN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default LoginScreen;
