import { StyleSheet } from 'react-native';
import { BLACK, POLAR } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: POLAR,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
      color: BLACK,
      fontSize: 20,
      fontWeight: 'bold'
  },
  disabledButton: {
      color: 'gray',
      fontSize: 20,
      fontWeight: 'bold'
  },
  buttonContainer: {
      height: 40
  }
});
