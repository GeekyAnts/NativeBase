import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    'NativeBase.Text': {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7
    },
    'NativeBase.Icon': {
      color: variables.topTabBarTextColor
    },
    '.active': {
      'NativeBase.Text': {
        color: variables.topTabBarActiveTextColor
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor
      },
    }
  };


  return tabHeadingTheme;
};
