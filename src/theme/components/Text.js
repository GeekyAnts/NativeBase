import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const textTheme = {
      fontSize: variables.DefaultFontSize - 1,
      fontFamily: variables.fontFamily,
      color: '#000',
      '.note': {
        color: '#a7a7a7',
        fontSize: variables.noteFontSize
      }
  };

  return textTheme;
};
