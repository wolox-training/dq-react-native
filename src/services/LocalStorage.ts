import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN = '@WBOOKS:AUTH_TOKEN';

export const storeHeaders = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(AUTH_TOKEN, jsonValue);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error storing token');
  }
};

export const getHeaders = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_TOKEN);
    return value === null ? null : JSON.parse(value);
  } catch (e) {
    return null;
  }
};

export const removeHeaders = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error logging out');
  }
};
