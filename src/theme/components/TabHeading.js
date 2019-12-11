// @flow

import variable from './../variables/platform';
import { isIos, isAndroid } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '.scrollable': {
      paddingHorizontal: 20,
      flex: isAndroid ? 0 : 1,
      minWidth: isAndroid ? undefined : 60
    },
    'NativeBase.Text': {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7
    },
    'NativeBase.Icon': {
      color: variables.topTabBarTextColor,
      fontSize: isIos ? 26 : undefined
    },
    '.active': {
      'NativeBase.Text': {
        color: variables.topTabBarActiveTextColor,
        fontWeight: '600'
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor
      }
    }
  };

  return tabHeadingTheme;
};
