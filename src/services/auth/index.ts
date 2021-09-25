import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_LOGGED } from '../../utils/StorageKeys';

export const onSignIn = async (username: string): Promise<void> => {
  await AsyncStorage.setItem(USER_LOGGED, JSON.stringify(username));
};

export const onSignOut = async (): Promise<void> =>
  await AsyncStorage.removeItem(USER_LOGGED);

export const isSignedIn = async (): Promise<string | null> => {
  let user = await AsyncStorage.getItem(USER_LOGGED);
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};
