import { RouteProp, NavigationProp, NavigationState } from '@react-navigation/native';

export interface Navigation<T extends object | undefined> {
  route: RouteProp<Record<string, T>, string>;
  navigation: NavigationProp<Record<string, T>, string, NavigationState, {}, {}>;
}
