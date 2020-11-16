import { StyleSheet } from 'react-native';
import { WHITE } from '@constants/colors';

const CROSS_ICON_SIZE = 20;
const SEARCH_ICON_SIZE = 15;
export default StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 15,
    backgroundColor: WHITE,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    paddingVertical: 0
  },
  searchIcon: {
    height: SEARCH_ICON_SIZE,
    width: SEARCH_ICON_SIZE,
    marginRight: 10
  },
  deleteIcon: {
    height: CROSS_ICON_SIZE,
    width: CROSS_ICON_SIZE
  }
});
