import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const fabTheme = {
    'NativeBase.Button': {
        alignItems: 'center',
        justifyContent: 'center',
        'NativeBase.Icon': {
          alignSelf: 'center',
        },
        'NativeBase.IconNB': {
          alignSelf: 'center',
        },
    },
  };


  return fabTheme;
};
