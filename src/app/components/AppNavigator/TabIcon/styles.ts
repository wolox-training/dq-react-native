import { StyleSheet } from 'react-native';
import { CERULEAN, FRENCH_GREY } from '@constants/colors';

const iconSize = 32;

export default StyleSheet.create({
  imageFocused: {
    tintColor: CERULEAN,
    height: iconSize,
    width: iconSize
  },
  imageUnFocused: {
    tintColor: FRENCH_GREY,
    height: iconSize,
    width: iconSize
  }
});
