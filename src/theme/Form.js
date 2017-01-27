import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const theme = {
    'NativeBase.Item': {
      '.last': {
        borderBottomWidth: 0,
      },
    },
  };

  return theme;
};
