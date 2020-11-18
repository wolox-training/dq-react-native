import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ADD_NEW_STACK,
  COMING_SOON_SCREEN,
  DETAIL_SCREEN,
  HOME_SCREEN,
  LIBRARY_STACK,
  LOADING_SCREEN,
  LOG_IN_SCREEN,
  RENTAL_STACK,
  SEARCH_SCREEN,
  SETTINGS_STACK,
  TAB_MENU,
  WISHLIST_STACK
} from '@constants/routes';
import {
  addNewStackConfig,
  homeConfig,
  libraryStackConfig,
  rentalsStackConfig,
  searchConfig,
  settingsStackConfig,
  stackNavigatorConfig,
  tabBarOptions,
  wishlistStackConfig
} from '@config/navigation';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';
import ComingSoonScreen from '@screens/ComingSoonScreen';
import LoginScreen from '@screens/LoginScreen';
import TabIcon from '@components/TabIcon';
import { AppState } from '@interfaces/redux';
import actionCreators from '@redux/auth/actions';
import BookSearchScreen from '@screens/BookSearchScreen';

const LibraryStackNavigator = createStackNavigator();
const WishlistStackNavigator = createStackNavigator();
const AddNewStackNavigator = createStackNavigator();
const RentalsStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();
const LoginStackNavigator = createStackNavigator();
const comingSoonInitialParams = { text: 'Coming Soon' };
function LibraryStackScreen() {
  return (
    <LibraryStackNavigator.Navigator initialRouteName={HOME_SCREEN} screenOptions={stackNavigatorConfig}>
      <LibraryStackNavigator.Screen name={HOME_SCREEN} component={HomeScreen} options={homeConfig} />
      <LibraryStackNavigator.Screen name={DETAIL_SCREEN} component={DetailScreen} />
      <LibraryStackNavigator.Screen
        name={SEARCH_SCREEN}
        component={BookSearchScreen}
        options={searchConfig}
      />
    </LibraryStackNavigator.Navigator>
  );
}
function WishlistStackScreen() {
  return (
    <WishlistStackNavigator.Navigator
      initialRouteName={COMING_SOON_SCREEN}
      screenOptions={stackNavigatorConfig}>
      <WishlistStackNavigator.Screen
        name={COMING_SOON_SCREEN}
        component={ComingSoonScreen}
        initialParams={comingSoonInitialParams}
      />
    </WishlistStackNavigator.Navigator>
  );
}
function AddNewStackScreen() {
  return (
    <AddNewStackNavigator.Navigator
      initialRouteName={COMING_SOON_SCREEN}
      screenOptions={stackNavigatorConfig}>
      <AddNewStackNavigator.Screen
        name={COMING_SOON_SCREEN}
        component={ComingSoonScreen}
        initialParams={comingSoonInitialParams}
      />
    </AddNewStackNavigator.Navigator>
  );
}
function RentalStackScreen() {
  return (
    <RentalsStackNavigator.Navigator
      initialRouteName={COMING_SOON_SCREEN}
      screenOptions={stackNavigatorConfig}>
      <RentalsStackNavigator.Screen
        name={COMING_SOON_SCREEN}
        component={ComingSoonScreen}
        initialParams={comingSoonInitialParams}
      />
    </RentalsStackNavigator.Navigator>
  );
}
function SettingsStackScreen() {
  return (
    <SettingsStackNavigator.Navigator
      initialRouteName={COMING_SOON_SCREEN}
      screenOptions={stackNavigatorConfig}>
      <SettingsStackNavigator.Screen
        name={COMING_SOON_SCREEN}
        component={ComingSoonScreen}
        initialParams={comingSoonInitialParams}
      />
    </SettingsStackNavigator.Navigator>
  );
}
function TabMenu() {
  return (
    <TabNavigator.Navigator tabBarOptions={tabBarOptions} screenOptions={{ tabBarIcon: TabIcon }}>
      <TabNavigator.Screen options={libraryStackConfig} name={LIBRARY_STACK} component={LibraryStackScreen} />
      <TabNavigator.Screen
        options={wishlistStackConfig}
        name={WISHLIST_STACK}
        component={WishlistStackScreen}
      />
      <TabNavigator.Screen options={addNewStackConfig} name={ADD_NEW_STACK} component={AddNewStackScreen} />
      <TabNavigator.Screen options={rentalsStackConfig} name={RENTAL_STACK} component={RentalStackScreen} />
      <TabNavigator.Screen
        options={settingsStackConfig}
        name={SETTINGS_STACK}
        component={SettingsStackScreen}
      />
    </TabNavigator.Navigator>
  );
}

function AppNavigator() {
  const sessionLoading = useSelector((state: AppState) => state.auth.sessionLoading);
  const token = useSelector((state: AppState) => state.auth.headers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.rememberUser());
  }, [dispatch]);
  return (
    <LoginStackNavigator.Navigator>
      {sessionLoading ? (
        <LoginStackNavigator.Screen
          options={{ headerShown: false }}
          name={LOADING_SCREEN}
          component={ComingSoonScreen}
          initialParams={{ text: 'Loading...' }}
        />
      ) : token ? (
        <LoginStackNavigator.Screen options={{ headerShown: false }} name={TAB_MENU} component={TabMenu} />
      ) : (
        <LoginStackNavigator.Screen
          options={{ headerShown: false }}
          name={LOG_IN_SCREEN}
          component={LoginScreen}
        />
      )}
    </LoginStackNavigator.Navigator>
  );
}

export default AppNavigator;
