import { ViewStyle } from 'react-native';

import { BLACK } from './colors';

export const SHADOW = {
  shadowColor: BLACK,
  shadowOpacity: 0.15,
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowRadius: 1,
  elevation: 1
};

export const BUTTON: ViewStyle = {
  marginHorizontal: 30,
  height: 44,
  borderRadius: 22,
  justifyContent: 'center'
};
