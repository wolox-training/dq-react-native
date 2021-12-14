import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import background from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';
import actionCreators from '@redux/auth/actions';
import { isValidEmail, isValidPassword } from '@constants/utils';
import { AppState } from '@interfaces/redux';
import WithLoader from '@components/WithLoader';
import { BLACK } from '@constants/colors';
import * as Keychain from 'react-native-keychain';

import styles from './styles';
import { capitalize } from '@app/utils/stringUtils';
import { getBiometricsFlag } from '@services/LocalStorage';

function LoginScreen() {
  const [userValue, onChangeUserText] = useState('');
  const [passwordValue, onChangePasswordText] = useState('');
  const [userError, onChangeUserError] = useState(false);
  const [passwordError, onChangePasswordError] = useState(false);
  const [buttonEnabled, onButtonChanged] = useState(false);
  const [rememberEnabled, onRememberEnabledChanged] = useState(false);
  const [hasUserRemembered, onHasUserRememberedChanged] = useState(false);

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
    dispatch(actionCreators.logIn(userValue, passwordValue, rememberEnabled));
  };

  const onRememberPress = () => {
    onRememberEnabledChanged(!rememberEnabled)
  };

  const loginLoading = useSelector((state: AppState) => state.auth.headersLoading);
  const loginError = useSelector((state: AppState) => state.auth.headersError);
  const [biometricType, onBiometricTypeChanged] = useState('');
  const onBiometricsPress = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      dispatch(actionCreators.logIn(credentials.username, credentials.password, true));
    } else {
      console.warn('No credentials stored');
    }
  };

  useEffect(() => {
    Keychain.getSupportedBiometryType().then((value) => {
      onBiometricTypeChanged(value ?? '')})
    getBiometricsFlag().then((value) => onHasUserRememberedChanged(value ?? false))
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />
      <WithLoader loading={loginLoading}>
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
            { (biometricType !== '') && !hasUserRemembered && <TouchableOpacity
              style={styles.rememberContainer}
              onPress={onRememberPress}>
              <View style={styles.radio1}><View style={rememberEnabled && styles.radio2}></View></View>
              <Text style={styles.buttonText}>Activate {capitalize(biometricType)} Access</Text>
            </TouchableOpacity> }
            { (biometricType !== '') && hasUserRemembered && <TouchableOpacity
              style={[styles.button]}
              onPress={onBiometricsPress}>
              <Text style={styles.buttonText}>LOG IN WITH {biometricType.toUpperCase()}</Text>
            </TouchableOpacity>}
            {loginError && <Text style={[styles.error, styles.padding]}>Invalid credentials</Text>}
          </KeyboardAvoidingView>
          <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
        </ImageBackground>
      </WithLoader>
    </>
  );
}

export default LoginScreen;
