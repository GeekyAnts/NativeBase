import { Platform, Dimensions } from 'react-native';

export const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
  MATERIAL: 'material',
  WEB: 'web'
};

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const isIos = Platform.OS === PLATFORM.IOS;
export const isAndroid = Platform.OS === PLATFORM.ANDROID;

export const isIphoneX =
  isIos &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);
