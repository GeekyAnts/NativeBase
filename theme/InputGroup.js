import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const inputGroupTheme = {
      'NativeBase.Icon': {
        fontSize: 24,
        color: variables.topTabBarActiveTextColor,
        paddingHorizontal: 5,
      },
      'NativeBase.IconNB': {
        fontSize: 24,
        color: variables.topTabBarActiveTextColor,
        paddingHorizontal: 5,
      },
      'NativeBase.Input': {
        height: variables.inputHeightBase,
        color: variables.inputColor,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        fontSize: variables.inputFontSize,
        lineHeight: variables.inputLineHeight,
      },
      '.underline': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variables.inputBorderColor,
      },
      '.regular': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderColor: variables.inputBorderColor,
      },
      '.rounded': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderRadius: variables.inputGroupRoundedBorderRadius,
        borderColor: variables.inputBorderColor,
      },

      '.success': {
        '.rounded': {
          borderRadius: 30,
          borderColor: variables.inputSuccessBorderColor,
        },
        '.regular': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.underline': {
          borderWidth: variables.borderWidth,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderColor: variables.inputSuccessBorderColor,
        },
        borderColor: variables.inputSuccessBorderColor,
      },

      '.error': {
        '.rounded': {
          borderRadius: 30,
          borderColor: variables.inputErrorBorderColor,
        },
        '.regular': {
          borderColor: variables.inputErrorBorderColor,
        },
        '.underline': {
          borderWidth: variables.borderWidth,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderColor: variables.inputErrorBorderColor,
        },
        borderColor: variables.inputErrorBorderColor,
      },

      paddingLeft: 5,
      borderWidth: variables.borderWidth,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputBorderColor,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
  };


  return inputGroupTheme;
};
