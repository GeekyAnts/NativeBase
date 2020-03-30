// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.defaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    fontWeight: 'normal',
    '.note': {
      color: '#444444',
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
