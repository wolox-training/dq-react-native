import { StyleSheet, TextStyle } from 'react-native';
import { ALTO, CERULEAN, MONZA, WHITE } from '@constants/colors';
import { BUTTON, GREY_TEXT, SHADOW } from '@constants/commonStyles';
import { FONT_BOLD, FONT_HEAVY } from '@constants/fontWeights';

const BUTTON_TEXT_FORMAT: TextStyle = {
  textAlign: 'center',
  fontWeight: FONT_HEAVY
};

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
    ...BUTTON_TEXT_FORMAT,
    color: WHITE
  },
  wishButton: {
    borderWidth: 1,
    borderColor: CERULEAN,
    marginBottom: 10,
    ...BUTTON
  },
  wishButtonText: {
    ...BUTTON_TEXT_FORMAT,
    color: CERULEAN
  },
  textsContainer: {
    paddingHorizontal: 20,
    marginRight: 20,
    flex: 1
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
