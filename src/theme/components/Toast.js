// @flow

import variable from './../variables/platform';
import { isIos } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const toastTheme = {
    '.danger': {
      backgroundColor: variables.brandDanger
    },
    '.warning': {
      backgroundColor: variables.brandWarning
    },
    '.success': {
      backgroundColor: variables.brandSuccess
    },
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: isIos ? 5 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    minHeight: 50,
    'NativeBase.Text': {
      color: '#fff',
      flex: 1
    },
    'NativeBase.Button': {
      backgroundColor: 'transparent',
      height: 30,
      elevation: 0,
      'NativeBase.Text': {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
