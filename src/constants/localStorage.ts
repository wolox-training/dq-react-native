import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKey = 'WBOOKS_TOKEN';

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem(tokenKey, value);
  } catch (e) {
    console.log('error storing token');
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(tokenKey);
    return value;
  } catch (e) {
    return null;
  }
};
