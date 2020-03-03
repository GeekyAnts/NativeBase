// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const titleTheme = {
    '.h1': {
      fontSize: variables.fontSizeH1
    },
    '.h2': {
      fontSize: variables.fontSizeH2
    },
    '.h3': {
      fontSize: variables.fontSizeH3
    },
    '.h4': {
      fontSize: variables.fontSizeH4
    },
    '.h5': {
      fontSize: variables.fontSizeH5
    },
    '.h6': {
      fontSize: variables.fontSizeH6
    },
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === PLATFORM.IOS ? '700' : undefined,
    textAlign:  Platform.OS === PLATFORM.IOS ? 'center' : 'left',
    paddingLeft: Platform.OS === PLATFORM.IOS ? 4 : 0,
    marginLeft: Platform.OS === PLATFORM.ANDROID ? -3 : 0,
    paddingTop: 1
  };

  return titleTheme;
};
