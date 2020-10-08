import React from 'react';
import { Image } from 'react-native';
import image from '@assets/bc_nav_bar.png';

import styles from './styles';

function NavBackground() {
  return <Image style={styles.image} source={image} />;
}

export default NavBackground;
