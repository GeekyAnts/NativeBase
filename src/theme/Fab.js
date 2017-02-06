import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const fabTheme = {
    'NativeBase.Button': {
        alignItems: 'center',
        padding: null,
        justifyContent: 'center',
        'NativeBase.Icon': {
          alignSelf: 'center',
        },
        'NativeBase.IconNB': {
          alignSelf: 'center',
          fontSize: 20,
          lineHeight: (Platform.OS === 'ios') ? 24 : undefined,
        },
    },
  };


  return fabTheme;
};
