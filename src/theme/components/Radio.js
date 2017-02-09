import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const radioTheme = {
      '.selected': {
        'NativeBase.Icon': {
          color: variables.radioSelectedColor,
        },
        'NativeBase.IconNB': {
          color: variables.radioSelectedColor,
        },
      },
      'NativeBase.Icon': {
        color: variables.radioColor,
        lineHeight: variables.radioBtnLineHeight,
        fontSize: variables.radioBtnSize,
      },
      'NativeBase.IconNB': {
        color: variables.radioColor,
        lineHeight: variables.radioBtnLineHeight,
        fontSize: variables.radioBtnSize,
      },
  };


  return radioTheme;
};
