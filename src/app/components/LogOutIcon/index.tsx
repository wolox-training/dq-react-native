import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import icon from '@assets/ic_logout.png';
import actionCreators from '@redux/auth/actions';

import styles from './styles';

function LogOutIcon() {
  const dispatch = useDispatch();
  const onTouch = () => {
    dispatch(actionCreators.logOut());
  };
  return (
    <TouchableOpacity onPress={onTouch}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
}

export default LogOutIcon;
