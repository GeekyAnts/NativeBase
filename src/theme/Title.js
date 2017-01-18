import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    color: variables.titleFontColor,
    textAlign: 'center',
    fontWeight: '700',
  };


  return titleTheme;
};
