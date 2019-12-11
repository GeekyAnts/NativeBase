// @flow

import variable from './../variables/platform';
import { isIos } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: isIos ? '700' : undefined,
    textAlign: 'center',
    paddingLeft: isIos ? 4 : 0,
    marginLeft: isIos ? undefined : -3,
    paddingTop: 1
  };

  return titleTheme;
};
