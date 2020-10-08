import { StyleSheet } from 'react-native';
import { FRENCH_GREY } from '@constants/colors';
import { GREY_TEXT } from '@constants/commonStyles';
import { FONT_BOLD } from '@constants/fontWeights';

const imageSize = 46;

export default StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row'
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2
  },
  textsContianer: {
    marginHorizontal: 20,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: FRENCH_GREY,
    paddingBottom: 15
  },
  author: {
    fontWeight: FONT_BOLD,
    fontSize: 15,
    marginBottom: 5
  },
  text: GREY_TEXT
});
