import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const tabBorderTheme = {
    backgroundColor: variables.topTabBarActiveBorderColor
  };


  return tabBorderTheme;
};
