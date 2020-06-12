// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const checkBoxTheme = {
    '.checked': {
      'NativeBase.Icon': {
        color: variables.checkboxTickColor
      },
      'NativeBase.IconNB': {
        color: variables.checkboxTickColor
      }
    },
    'NativeBase.Icon': {
      color: 'transparent',
      lineHeight: variables.checkboxIconSize,
      marginTop: variables.checkboxIconMarginTop,
      fontSize: variables.checkboxFontSize
    },
    'NativeBase.IconNB': {
      color: 'transparent',
      lineHeight: variables.checkboxIconSize,
      marginTop: variables.checkboxIconMarginTop,
      fontSize: variables.checkboxFontSize
    },
    borderRadius: variables.checkboxRadius,
    overflow: 'hidden',
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    borderWidth: variables.checkboxBorderWidth,
    paddingLeft: variables.checkboxPaddingLeft - 1,
    paddingBottom: variables.checkboxPaddingBottom,
    left: 10
  };

  return checkBoxTheme;
};
