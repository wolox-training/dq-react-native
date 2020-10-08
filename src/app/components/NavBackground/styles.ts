import { CLEAR } from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: CLEAR,
    height: 400
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    backgroundColor: CLEAR,
    height: 400
  }
});
