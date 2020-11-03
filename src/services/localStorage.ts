import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN = '@WBOOKS:AUTH_TOKEN';

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN, value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error storing token');
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_TOKEN);
    return value;
  } catch (e) {
    return null;
  }
};
