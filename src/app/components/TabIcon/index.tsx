import React from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NAV_ICONS } from '@constants/routes';

import styles from './styles';

interface Props {
  focused: boolean;
}
function TabIcon({ focused }: Props) {
  const route = useRoute();
  return (
    <Image style={[styles.baseImage, !focused && styles.unFocusedImage]} source={NAV_ICONS[route.name]} />
  );
}

export default TabIcon;
