import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const textTheme = {
      fontSize: variables.DefaultFontSize,
      fontFamily: variables.fontFamily
  };

  return textTheme;
};
