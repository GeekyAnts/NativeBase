import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const textTheme = {
      fontSize: variables.DefaultFontSize,
      fontFamily: variables.fontFamily,
      '.note': {
        color: '#a7a7a7',
        fontSize: variables.noteFontSize
      }
  };

  return textTheme;
};
