import { TextStyle, ViewStyle } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { BLACK, TUNDORA } from './colors';
import { FONT_LIGHT } from './fontWeights';

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

export const GREY_TEXT: TextStyle = {
  fontSize: 15,
  fontWeight: FONT_LIGHT,
  color: TUNDORA
};

export const NOTCH_SIZE = DeviceInfo.hasNotch() ? 20 : 0;

export const NAV_HEIGHT = {
  height: 80 + NOTCH_SIZE
};

export const NAV_MARGIN = { paddingTop: 80 + NOTCH_SIZE };
