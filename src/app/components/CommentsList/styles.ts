import { StyleSheet } from 'react-native';
import { CERULEAN, WHITE } from '@constants/colors';
import { SHADOW } from '@constants/commonStyles';
import { FONT_LIGHT } from '@constants/fontWeights';

export default StyleSheet.create({
  scrollView: {
    borderRadius: 5,
    backgroundColor: WHITE,
    marginHorizontal: 20,
    marginBottom: 44,
    ...SHADOW
  },
  viewAll: {
    color: CERULEAN,
    fontSize: 15,
    fontWeight: FONT_LIGHT,
    marginBottom: 15,
    alignSelf: 'center'
  }
});
