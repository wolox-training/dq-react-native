import { CERULEAN, WHITE } from '@constants/colors';
import NavBackground from '@components/NavBackground';
import { NAV_HEIGHT } from '@constants/commonStyles';
import TabIcon from '@components/AppNavigator/TabIcon';
import libraryImage from '@assets/ic_library.png';
import wishlistImage from '@assets/ic_wishlist.png';
import addNewImage from '@assets/ic_add_new.png';
import rentalsImage from '@assets/ic_myrentals.png';
import settingsImage from '@assets/ic_settings.png';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: WHITE,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 20
  },
  headerLeftContainerStyle: {
    marginBottom: 20
  },
  headerStyle: NAV_HEIGHT,
  headerBackTitleVisible: false,
  headerBackground: NavBackground,
  headerTransparent: true,
  headerTintColor: WHITE
};

const libraryIcon = ({ focused }: { focused: boolean }) => TabIcon({ focused, source: libraryImage });
export const libraryStackConfig = {
  title: 'Library',
  tabBarIcon: libraryIcon
};

const wishlistIcon = ({ focused }: { focused: boolean }) => TabIcon({ focused, source: wishlistImage });
export const wishlistStackConfig = {
  title: 'Wishlist',
  tabBarIcon: wishlistIcon
};

const addNewIcon = ({ focused }: { focused: boolean }) => TabIcon({ focused, source: addNewImage });
export const addNewStackConfig = {
  title: 'Add New',
  tabBarIcon: addNewIcon
};

const rentalsIcon = ({ focused }: { focused: boolean }) => TabIcon({ focused, source: rentalsImage });
export const rentalsStackConfig = {
  title: 'Rentals',
  tabBarIcon: rentalsIcon
};

const settingsIcon = ({ focused }: { focused: boolean }) => TabIcon({ focused, source: settingsImage });
export const settingsStackConfig = {
  title: 'Settings',
  tabBarIcon: settingsIcon
};

export const tabBarOptions = {
  activeTintColor: CERULEAN
};
