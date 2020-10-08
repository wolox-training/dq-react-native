import React from 'react';
import { View, Image } from 'react-native';
import image from '@assets/bc_nav_bar.png';

import styles from './styles';

function NavBackground() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

export default NavBackground;
