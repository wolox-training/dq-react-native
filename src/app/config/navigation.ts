import { WHITE } from '@constants/colors';
import NavBackground from '@components/NavBackground';
import { NAV_HEIGHT } from '@constants/commonStyles';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: WHITE,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 20
  },
  headerStyle: NAV_HEIGHT,
  headerBackTitleVisible: false,
  headerBackground: NavBackground,
  headerTransparent: true,
  headerTintColor: WHITE
};
