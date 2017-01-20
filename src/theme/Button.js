import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';


export default (variables = variable) => {
  const buttonTheme = {
      '.disabled': {
        backgroundColor: variables.btnDisabledBg,
      },
      '.bordered': {
        '.primary': {
          'NativeBase.Text': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.Icon': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnPrimaryBg,
          },
          backgroundColor: 'transparent',
          borderColor: variables.btnPrimaryBg,
          borderWidth: 1,
        },
        '.success': {
          'NativeBase.Text': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.Icon': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnSuccessBg,
          },
          backgroundColor: 'transparent',
          borderColor: variables.btnSuccessBg,
          borderWidth: 1,
        },
        '.info': {
          'NativeBase.Text': {
            color: variables.btnInfoBg,
          },
          'NativeBase.Icon': {
            color: variables.btnInfoBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnInfoBg,
          },
          backgroundColor: 'transparent',
          borderColor: variables.btnInfoBg,
          borderWidth: 1,
        },
        '.warning': {
          'NativeBase.Text': {
            color: variables.btnWarningBg,
          },
          'NativeBase.Icon': {
            color: variables.btnWarningBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnWarningBg,
          },
          backgroundColor: 'transparent',
          borderColor: variables.btnWarningBg,
          borderWidth: 1,
        },
        '.danger': {
          'NativeBase.Text': {
            color: variables.btnDangerBg,
          },
          'NativeBase.Icon': {
            color: variables.btnDangerBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnDangerBg,
          },
          backgroundColor: 'transparent',
          borderColor: variables.btnDangerBg,
          borderWidth: 1,
        },
        '.disabled': {
          backgroundColor: null,
          borderColor: variables.btnDisabledBg,
          borderWidth: 1,
          'NativeBase.Text': {
            color: variables.btnDisabledBg,
          },
        },
        'NativeBase.Text': {
          color: variables.btnPrimaryBg,
        },
        'NativeBase.Icon': {
          color: variables.btnPrimaryBg,
        },
        'NativeBase.IconNB': {
          color: variables.btnPrimaryBg,
        },
        borderWidth: 1,
        elevation: null,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        backgroundColor: 'transparent',
      },


      '.primary': {
        '.bordered': {
          'NativeBase.Text': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.Icon': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnPrimaryBg,
          },
        },
        backgroundColor: variables.btnPrimaryBg,
      },

      '.success': {
        '.bordered': {
          'NativeBase.Text': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.Icon': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnSuccessBg,
          },
        },
        backgroundColor: variables.btnSuccessBg,
      },

      '.info': {
        '.bordered': {
          'NativeBase.Text': {
            color: variables.btnInfoBg,
          },
          'NativeBase.Icon': {
            color: variables.btnInfoBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnInfoBg,
          },
        },
        backgroundColor: variables.btnInfoBg,
      },

      '.warning': {
        '.bordered': {
          'NativeBase.Text': {
            color: variables.btnWarningBg,
          },
          'NativeBase.Icon': {
            color: variables.btnWarningBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnWarningBg,
          },
        },
        backgroundColor: variables.btnWarningBg,
      },

      '.danger': {
        '.bordered': {
          'NativeBase.Text': {
            color: variables.btnDangerBg,
          },
          'NativeBase.Icon': {
            color: variables.btnDangerBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnDangerBg,
          },
        },
        backgroundColor: variables.btnDangerBg,
      },

      '.block': {
        justifyContent: 'center',
        alignSelf: 'stretch',
      },

      '.rounded': {
        borderRadius: variables.borderRadiusLarge,
      },


      '.transparent': {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,

        'NativeBase.Text': {
          color: variables.defaultTextColor,
        },
        'NativeBase.Icon': {
          color: variables.defaultTextColor,
        },
        'NativeBase.IconNB': {
          color: variables.defaultTextColor,
        },


      },

      '.small': {
        height: 35,
      },

      '.large': {
        height: 60,
      },

      '.iconRight': {
        'NativeBase.Text': {
          marginRight: variables.buttonPadding,
        },
      },
      '.iconLeft': {
        'NativeBase.Text': {
          marginLeft: variables.buttonPadding,
        },
      },


      '.capitalize': {

      },

      '.vertical': {
        flexDirection: 'column',
        height: null,
      },


      'NativeBase.Text': {
        fontFamily: variables.btnFontFamily,
        marginLeft: 0,
        marginRight: 0,
        color: variables.inverseTextColor,
        fontSize: variables.btnTextSize,
        lineHeight: variables.btnLineHeight,
        // childPosition: 1
      },

      'NativeBase.Icon': {
        color: variables.inverseTextColor,
        fontSize: 24,
      },
      'NativeBase.IconNB': {
        color: variables.inverseTextColor,
        fontSize: 24,
      },

      paddingVertical: variables.buttonPadding,
      paddingHorizontal: variables.buttonPadding + 2,
      backgroundColor: variables.btnPrimaryBg,
      borderRadius: variables.borderRadiusBase,
      borderColor: variables.btnPrimaryBg,
      borderWidth: null,
      height: 38,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      elevation: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
  };
  return buttonTheme;
};
