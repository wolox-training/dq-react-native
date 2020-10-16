import { StyleSheet } from 'react-native';
import { CERULEAN, FRENCH_GREY } from '@constants/colors';

const iconSize = 32;

export default StyleSheet.create({
  baseImage: {
    tintColor: CERULEAN,
    height: iconSize,
    width: iconSize
  },
  unFocusedImage: {
    tintColor: FRENCH_GREY
  }
});
