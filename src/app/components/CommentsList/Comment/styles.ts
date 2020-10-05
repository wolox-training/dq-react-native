import { FRENCH_GREY } from '@constants/colors';
import { FONT_BOLD } from '@constants/fontWeights';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row'
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 23
  },
  textsContianer: {
    marginLeft: 20,
    marginRight: 40
  },
  author: {
    fontWeight: FONT_BOLD,
    fontSize: 15,
    marginBottom: 5
  },
  text: {},
  separator: {
    height: 1,
    backgroundColor: FRENCH_GREY,
    marginTop: 15,
    width: '100%'
  }
});
