// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color:
          Platform.OS === PLATFORM.IOS
            ? variables.radioColor
            : variables.radioSelectedColorAndroid,
        lineHeight:
          Platform.OS === PLATFORM.IOS ? 25 : variables.radioBtnLineHeight,
        height: Platform.OS === PLATFORM.IOS ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: Platform.OS === PLATFORM.IOS ? 'transparent' : undefined,
      lineHeight:
        Platform.OS === PLATFORM.IOS ? undefined : variables.radioBtnLineHeight,
      fontSize:
        Platform.OS === PLATFORM.IOS ? undefined : variables.radioBtnSize
    }
  };

  return radioTheme;
};
