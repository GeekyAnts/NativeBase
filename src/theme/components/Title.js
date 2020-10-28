// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === PLATFORM.IOS ? '700' : undefined,
    textAlign:  Platform.OS === PLATFORM.IOS ? 'center' : 'left',
    paddingLeft: Platform.OS === PLATFORM.IOS ? 4 : 0,
    marginLeft: Platform.OS === PLATFORM.IOS ? undefined : -3,
    paddingTop: 1
  };

  return titleTheme;
};
