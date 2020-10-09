import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface Props {
  focused: boolean;
  source: ImageSourcePropType;
}
function TabIcon({ focused, source }: Props) {
  return <Image style={focused ? styles.imageFocused : styles.imageUnFocused} source={source} />;
}

export default TabIcon;
