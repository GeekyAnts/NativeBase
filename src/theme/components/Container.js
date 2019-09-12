// @flow

import { Platform, Dimensions } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

const deviceHeight = Dimensions.get('window').height;
export default (variables /* : * */ = variable) => {
  const theme = {
    flex: 1,
    height: Platform.OS === PLATFORM.IOS ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  };

  return theme;
};
