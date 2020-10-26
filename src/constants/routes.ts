import libraryImage from '@assets/ic_library.png';
import wishlistImage from '@assets/ic_wishlist.png';
import addNewImage from '@assets/ic_add_new.png';
import rentalsImage from '@assets/ic_myrentals.png';
import settingsImage from '@assets/ic_settings.png';
import { ImageSourcePropType } from 'react-native';

export const HOME_SCREEN = 'Library';
export const DETAIL_SCREEN = 'Details';
export const COMING_SOON_SCREEN = 'ComingSoon';
export const LOG_IN_SCREEN = 'Login';
export const TAB_MENU = 'TabMenu';
export const LIBRARY_STACK = 'LibraryStack';
export const WISHLIST_STACK = 'WishlistStack';
export const ADD_NEW_STACK = 'AddNewStack';
export const RENTAL_STACK = 'RentalStack';
export const SETTINGS_STACK = 'SettingsStack';
export const NAV_ICONS: { [name: string]: ImageSourcePropType } = {
  [LIBRARY_STACK]: libraryImage,
  [WISHLIST_STACK]: wishlistImage,
  [ADD_NEW_STACK]: addNewImage,
  [RENTAL_STACK]: rentalsImage,
  [SETTINGS_STACK]: settingsImage
};
