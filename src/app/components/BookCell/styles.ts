import { StyleSheet } from 'react-native';
import { SHADOW } from '@constants/commonStyles';
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
    ...SHADOW
  },
  image: {
    height: 60,
    width: 40
  },
  textContainer: {
    marginLeft: 20,
    flex: 1
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
