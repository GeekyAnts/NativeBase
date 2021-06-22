import { Platform, StatusBar } from 'react-native';
// import Constants from 'expo-constants';
// @ts-ignore
// const expo = global.__expo;

const IOS_STATUS_BAR_HEIGHT = 20;

const DEFAULT_STATUSBAR_HEIGHT_EXPO = 0;

// https://docs.expo.io/versions/latest/sdk/constants/
// Try to get height from expo if app is using expo env
// IOS >= 11 is handled using SafeAreaView
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: DEFAULT_STATUSBAR_HEIGHT_EXPO
    ? DEFAULT_STATUSBAR_HEIGHT_EXPO
    : StatusBar.currentHeight,
  ios:
    Platform.Version < 11
      ? DEFAULT_STATUSBAR_HEIGHT_EXPO
        ? DEFAULT_STATUSBAR_HEIGHT_EXPO
        : IOS_STATUS_BAR_HEIGHT
      : 0,
});
