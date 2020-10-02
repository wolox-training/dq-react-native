import { StyleSheet } from 'react-native';
import { ALTO, CERULEAN, MONZA, TUNDORA, WHITE } from '@constants/colors';
import { SHADOW } from '@constants/commonStyles';
import { FONT_BOLD, FONT_HEAVY, FONT_LIGHT } from '@constants/fontWeights';

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
    marginHorizontal: 20,
    marginBottom: 30
  },
  image: {
    height: 105,
    width: 69,
    marginRight: 20
  },
  rentButton: {
    marginHorizontal: 30,
    height: 44,
    borderRadius: 22,
    backgroundColor: ALTO,
    marginBottom: 22,
    justifyContent: 'center'
  },
  rentButtonText: {
    textAlign: 'center',
    fontWeight: FONT_HEAVY,
    color: WHITE
  },
  wishButton: {
    marginHorizontal: 30,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: CERULEAN,
    marginBottom: 10,
    justifyContent: 'center'
  },
  wishButtonText: {
    textAlign: 'center',
    color: CERULEAN,
    fontWeight: FONT_HEAVY
  },
  textsContainer: {},
  title: {
    fontSize: 24,
    fontWeight: FONT_BOLD
  },
  availability: {
    fontSize: 15,
    fontWeight: FONT_BOLD,
    color: MONZA
  },
  author: {
    fontSize: 15,
    fontWeight: FONT_LIGHT,
    color: TUNDORA
  },
  year: {
    fontSize: 15,
    fontWeight: FONT_LIGHT,
    color: TUNDORA
  },
  genre: {
    fontSize: 15,
    fontWeight: FONT_LIGHT,
    color: TUNDORA
  }
});
