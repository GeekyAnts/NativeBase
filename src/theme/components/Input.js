// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    ...defaultStyles(variables),
  };

  return inputTheme;
};

export function defaultStyles (variables = variable) {
  return {
    width: '100%',
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 0,
    paddingRight: 5,
    fontSize: variables.inputFontSize
  };
};

