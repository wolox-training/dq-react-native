import { WHITE } from '@constants/colors';
import NavBackground from '@components/NavBackground';
import { NAV_HEIGHT, NOTCH_SIZE } from '@constants/commonStyles';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: WHITE,
    fontWeight: '600',
    letterSpacing: -0.4
  },
  headerStyle: NAV_HEIGHT,
  headerStatusBarHeight: 10 + NOTCH_SIZE,
  headerBackTitleVisible: false,
  headerBackground: NavBackground,
  headerTransparent: true,
  headerTintColor: WHITE
};
