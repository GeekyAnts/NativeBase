// @flow

import variable from './../variables/platform';
import { isIos } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
    paddingLeft: isIos ? 4 : 0,
    marginLeft: isIos ? undefined : -3
  };

  return subtitleTheme;
};
