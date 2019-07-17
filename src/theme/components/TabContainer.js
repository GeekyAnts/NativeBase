// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const platformStyle = variables.platformStyle;

  const tabContainerTheme = {
    elevation: 3,
    height: 50,
    flexDirection: 'row',
    shadowColor: platformStyle === PLATFORM.MATERIAL ? '#000' : undefined,
    shadowOffset:
      platformStyle === PLATFORM.MATERIAL ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === PLATFORM.MATERIAL ? 0.2 : undefined,
    shadowRadius: platformStyle === PLATFORM.MATERIAL ? 1.2 : undefined,
    justifyContent: 'space-around',
    borderBottomWidth: Platform.OS === PLATFORM.IOS ? variables.borderWidth : 0,
    borderColor: variables.topTabBarBorderColor
  };

  return tabContainerTheme;
};
