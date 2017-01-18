import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const h1Theme = {
      color: variables.textColor,
      fontSize: variables.fontSizeH1,
      lineHeight: variables.lineHeightH1,
  };


  return h1Theme;
};
