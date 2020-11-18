import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icon from '@assets/ic_search.png';
import { SEARCH_SCREEN } from '@constants/routes';

import styles from './styles';

function SearchIcon() {
  const navigation = useNavigation();
  const onTouch = () => {
    navigation.navigate(SEARCH_SCREEN);
  };
  return (
    <TouchableOpacity onPress={onTouch}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
}

export default SearchIcon;
