import { StyleSheet } from 'react-native';
import { WHITE, TUNDORA } from '@constants/colors';
import { FONT_BOLD } from '@constants/fontWeights';

const ICON_SIZE = 60;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: WHITE
  },
  image: {
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  title: {
    fontSize: 15,
    fontWeight: FONT_BOLD,
    marginVertical: 20
  },
  subtitle: {
    fontSize: 15,
    color: TUNDORA
  }
});
