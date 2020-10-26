import { StyleSheet } from 'react-native';
import { TUNDORA, WHITE } from '@constants/colors';
import { BUTTON } from '@constants/commonStyles';
import { FONT_BOLD } from '@constants/fontWeights';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: TUNDORA,
    backgroundColor: WHITE,
    width: '90%',
    marginVertical: 20,
    paddingHorizontal: 10
  },
  footer: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  button: {
    ...BUTTON,
    borderColor: WHITE,
    borderWidth: 1,
    paddingHorizontal: 20
  },
  buttonText: {
    color: WHITE,
    fontWeight: FONT_BOLD
  }
});
