import { StyleSheet } from 'react-native';
import { FRENCH_GREY } from '@constants/colors';
import { GREY_TEXT } from '@constants/commonStyles';
import { FONT_BOLD } from '@constants/fontWeights';

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
    marginRight: 20,
    flex: 1
  },
  author: {
    fontWeight: FONT_BOLD,
    fontSize: 15,
    marginBottom: 5
  },
  text: GREY_TEXT,
  separator: {
    height: 1,
    backgroundColor: FRENCH_GREY,
    marginTop: 15,
    flex: 1
  }
});
