import { StyleSheet } from 'react-native';
import { ALTO, CERULEAN, MONZA, WHITE } from '@constants/colors';
import { BUTTON, GREY_TEXT, SHADOW } from '@constants/commonStyles';
import { FONT_BOLD, FONT_HEAVY } from '@constants/fontWeights';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    margin: 20,
    borderRadius: 5,
    ...SHADOW
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 30,
    paddingLeft: 20
  },
  image: {
    height: 105,
    width: 69
  },
  rentButton: {
    backgroundColor: ALTO,
    marginBottom: 22,
    ...BUTTON
  },
  rentButtonText: {
    textAlign: 'center',
    fontWeight: FONT_HEAVY,
    color: WHITE
  },
  wishButton: {
    borderWidth: 1,
    borderColor: CERULEAN,
    marginBottom: 10,
    ...BUTTON
  },
  wishButtonText: {
    textAlign: 'center',
    color: CERULEAN,
    fontWeight: FONT_HEAVY
  },
  textsContainer: {
    paddingHorizontal: 20,
    marginRight: 70
  },
  title: {
    fontSize: 24,
    fontWeight: FONT_BOLD
  },
  availability: {
    fontSize: 15,
    fontWeight: FONT_BOLD,
    color: MONZA
  },
  author: GREY_TEXT,
  year: GREY_TEXT,
  genre: GREY_TEXT
});
