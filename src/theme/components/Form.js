import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const theme = {
    'NativeBase.Item':{
    '.fixedLabel': {
      'NativeBase.Label': {
        paddingLeft: null,
      },
      marginLeft: 15,
    },
    '.inlineLabel': {
      'NativeBase.Label': {
        paddingLeft: null,
      },
      marginLeft: 15,
    },
    '.placeholderLabel': {
      'NativeBase.Input': {
      },
    },
    '.stackedLabel': {
      'NativeBase.Label': {
        paddingLeft: null,
      },
      'NativeBase.Input': {
        paddingLeft: null,
        marginLeft: (platform === 'ios') ? undefined : -5,
      },
      marginLeft: 15,
    },
    '.floatingLabel': {
      'NativeBase.Input': {
        paddingLeft: null,
        top: 8,
        marginLeft: (platform === 'ios') ? undefined : -5,
      },
      'NativeBase.Label': {
        left: 0,
        top: 8,
      },
      marginLeft: 15,
    },
    '.regular': {
      'NativeBase.Label': {
        left: 0,
      },
      marginLeft: 0,
    },
    '.rounded': {
      'NativeBase.Label': {
        left: 0,
      },
      marginLeft: 0,
    },
    '.underline': {
      'NativeBase.Label': {
        left: 0,
        top: 0,
        position: 'relative',
      },
      'NativeBase.Input': {
        left: -15,
      },
      marginLeft: 15,
    },
    '.last': {
      marginLeft:0,
      paddingLeft:15,
    },
    'NativeBase.Label': {
      paddingRight: 5,
    },
    marginLeft: 15,
  },
  };

  return theme;
};