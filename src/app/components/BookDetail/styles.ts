import { StyleSheet } from 'react-native';

import IOSSHADOW from '@constants/commonStyles';
import { TUNDORA, WHITE } from '@constants/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: WHITE,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    ...IOSSHADOW
  },
  image: {
    height: 60,
    width: 40
  },
  textContainer: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: TUNDORA
  }
});
