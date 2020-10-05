import { WHITE } from '@constants/colors';
import { SHADOW } from '@constants/commonStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    borderRadius: 5,
    backgroundColor: WHITE,
    marginHorizontal: 20,
    marginBottom: 44,
    ...SHADOW
  }
});
