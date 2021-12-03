import { StyleSheet } from 'react-native';
import { BLACK, CERULEAN, POLAR } from '@constants/colors';
import { FONT_HEAVY } from '@constants/fontWeights';
import { BUTTON } from '@constants/commonStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: POLAR,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: FONT_HEAVY,
    fontSize: 30,
    color: BLACK,
    alignSelf: 'center',
    marginVertical: 30,
    textAlign: 'center'
  },
  textButton: {
    fontWeight: FONT_HEAVY,
    fontSize: 20,
    color: CERULEAN,
    alignSelf: 'center',
    textAlign: 'center'
  },
  button: {
    ...BUTTON,
    borderColor: CERULEAN,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginTop: 10
  }
});
