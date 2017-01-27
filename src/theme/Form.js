import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
    'last': {
      'NativeBase.Item': {
        borderBottomWidth: 0,
      },
    },
  };

  return theme;
};
