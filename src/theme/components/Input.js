// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: variables.inputVerticalPadding-4,
    paddingBottom: variables.inputVerticalPadding,
    flex: 1,
    fontSize: variables.inputFontSize
  };

  return inputTheme;
};
