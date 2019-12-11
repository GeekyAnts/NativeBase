// @flow

import variable from './../variables/platform';
import { isIos } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color: isIos
          ? variables.radioColor
          : variables.radioSelectedColorAndroid,
        lineHeight: isIos ? 25 : variables.radioBtnLineHeight,
        height: isIos ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: isIos ? 'transparent' : undefined,
      lineHeight: isIos ? undefined : variables.radioBtnLineHeight,
      fontSize: isIos ? undefined : variables.radioBtnSize
    }
  };

  return radioTheme;
};
