import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

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
          lineHeight: (platform === 'ios') ? 24 : undefined,
        },
    },
  };


  return fabTheme;
};
