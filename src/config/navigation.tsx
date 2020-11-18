import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { CERULEAN, WHITE } from '@constants/colors';
import NavBackground from '@components/NavBackground';
import { NAV_HEIGHT } from '@constants/commonStyles';
import LogOutIcon from '@components/LogOutIcon';
import SearchIcon from '@components/SearchIcon';
import SearchBar from '@components/SearchBar';

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

export const homeConfig = {
  headerLeft: () => <LogOutIcon />,
  headerRight: () => <SearchIcon />
};

export const searchConfig = {
  ...TransitionPresets.ModalTransition,
  headerTitle: () => <SearchBar />,
  headerTitleContainerStyle: {
    flex: 1
  }
};

export const libraryStackConfig = { title: 'Library' };

export const wishlistStackConfig = { title: 'Wishlist' };

export const addNewStackConfig = { title: 'Add New' };

export const rentalsStackConfig = { title: 'Rentals' };

export const settingsStackConfig = { title: 'Settings' };

export const tabBarOptions = { activeTintColor: CERULEAN };
