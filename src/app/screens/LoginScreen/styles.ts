import { StyleSheet } from 'react-native';
import { DISABLED_BUTTON_COLOR, ERROR_RED, TUNDORA, WHITE } from '@constants/colors';
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
    paddingHorizontal: 20,
    marginTop: 10
  },
  disabledButton: {
    borderColor: DISABLED_BUTTON_COLOR
  },
  buttonText: {
    color: WHITE,
    fontWeight: FONT_BOLD,
    alignSelf: 'center'
  },
  disabledButtonText: {
    color: DISABLED_BUTTON_COLOR
  },
  error: {
    color: ERROR_RED
  },
  padding: {
    paddingTop: 20
  },
  radio1: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: WHITE,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  radio2: {
    borderRadius: 8,
    height: 16,
    width: 16,
    backgroundColor: WHITE
  },
  rememberContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
