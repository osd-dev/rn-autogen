import AsyncStorage from '@react-native-community/async-storage';
const USER = 'user';

export const saveUser = user =>
  AsyncStorage.setItem(USER, JSON.stringify(user));
export const getUser = () => AsyncStorage.getItem(USER);
export const removeUser = () => AsyncStorage.removeItem(USER);
