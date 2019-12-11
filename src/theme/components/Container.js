// @flow

import { Dimensions } from 'react-native';

import variable from './../variables/platform';
import { isIos } from './../variables/common';

const deviceHeight = Dimensions.get('window').height;
export default (variables /* : * */ = variable) => {
  const theme = {
    flex: 1,
    height: isIos ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  };

  return theme;
};
