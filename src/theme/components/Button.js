import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';


export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const buttonTheme = {
      '.disabled': {
        backgroundColor: variables.btnDisabledBg,
      },
      '.bordered': {
        '.dark': {
          'NativeBase.Text': {
            color: '#000',
          },
          'NativeBase.Icon': {
            color: '#000',
          },
          'NativeBase.IconNB': {
            color: '#000',
          },
          backgroundColor: 'transparent',
          borderColor: '#000',
          borderWidth: variables.borderWidth * 2,
        },
        '.light': {
          'NativeBase.Text': {
            color: '#f4f4f4',
          },
          'NativeBase.Icon': {
            color: '#f4f4f4',
          },
          'NativeBase.IconNB': {
            color: '#f4f4f4',
          },
          backgroundColor: 'transparent',
          borderColor: '#f4f4f4',
          borderWidth: variables.borderWidth * 2,
        },
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
          borderWidth: variables.borderWidth * 2,
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
          borderWidth: variables.borderWidth * 2,
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
          borderWidth: variables.borderWidth * 2,
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
          borderWidth: variables.borderWidth * 2,
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
          borderWidth: variables.borderWidth * 2,
        },
        '.disabled': {
          backgroundColor: null,
          borderColor: variables.btnDisabledBg,
          borderWidth: variables.borderWidth * 2,
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
        borderWidth: variables.borderWidth * 2,
        elevation: null,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        backgroundColor: 'transparent',
      },

      '.dark': {
        '.bordered': {
          'NativeBase.Text': {
            color: '#000',
          },
          'NativeBase.Icon': {
            color: '#000',
          },
          'NativeBase.IconNB': {
            color: '#000',
          },
        },
        backgroundColor: '#000',
      },
      '.light': {
        '.transparent': {
          'NativeBase.Text': {
            color: '#f4f4f4',
          },
          'NativeBase.Icon': {
            color: '#f4f4f4',
          },
          'NativeBase.IconNB': {
            color: '#f4f4f4',
          },
          backgroundColor: null,
        },
        '.bordered': {
          'NativeBase.Text': {
            color: '#f4f4f4',
          },
          'NativeBase.Icon': {
            color: '#f4f4f4',
          },
          'NativeBase.IconNB': {
            color: '#f4f4f4',
          },
        },
        'NativeBase.Text': {
            color: '#000',
          },
          'NativeBase.Icon': {
            color: '#000',
          },
          'NativeBase.IconNB': {
            color: '#000',
          },
        backgroundColor: '#f4f4f4',
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

      '.full': {
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 0
      },

      '.rounded': {
        paddingHorizontal: variables.buttonPadding + 20,
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
          color: variables.btnPrimaryBg,
        },
        'NativeBase.Icon': {
          color: variables.btnPrimaryBg,
        },
        'NativeBase.IconNB': {
          color: variables.btnPrimaryBg,
        },
        '.dark': {
          'NativeBase.Text': {
            color: '#000',
          },
          'NativeBase.IconNB': {
            color: '#000',
          },
          'NativeBase.Icon': {
            color: '#000',
          },
          backgroundColor: null,
        },
        '.danger': {
          'NativeBase.Text': {
            color: variables.btnDangerBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnDangerBg,
          },
          'NativeBase.Icon': {
            color: variables.btnDangerBg,
          },
          backgroundColor: null,
        },
        '.warning': {
          'NativeBase.Text': {
            color: variables.btnWarningBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnWarningBg,
          },
          'NativeBase.Icon': {
            color: variables.btnWarningBg,
          },
          backgroundColor: null,
        },
        '.info': {
          'NativeBase.Text': {
            color: variables.btnInfoBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnInfoBg,
          },
          'NativeBase.Icon': {
            color: variables.btnInfoBg,
          },
          backgroundColor: null,
        },
        '.primary': {
          'NativeBase.Text': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnPrimaryBg,
          },
          'NativeBase.Icon': {
            color: variables.btnPrimaryBg,
          },
          backgroundColor: null,
        },
        '.success': {
          'NativeBase.Text': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.IconNB': {
            color: variables.btnSuccessBg,
          },
          'NativeBase.Icon': {
            color: variables.btnSuccessBg,
          },
          backgroundColor: null,
        },
        '.light': {
          'NativeBase.Text': {
            color: '#f4f4f4',
          },
          'NativeBase.IconNB': {
            color: '#f4f4f4',
          },
          'NativeBase.Icon': {
            color: '#f4f4f4',
          },
          backgroundColor: null,
        },


      },

      '.small': {
        height: 30,
        'NativeBase.Text': {
          fontSize: 14,
        },
      },

      '.large': {
        height: 60,
        'NativeBase.Text': {
          fontSize: 22,
          lineHeight: 24,
        },
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
        marginHorizontal: 5,
        paddingTop: (platform === 'ios') ? 2 : undefined
      },
      'NativeBase.IconNB': {
        color: variables.inverseTextColor,
        fontSize: 24,
        marginHorizontal: 5,
        paddingTop: (platform === 'ios') ? 2 : undefined
      },
      '.iconLeft': {
        'NativeBase.IconNB': {
          marginRight: 10,
          marginLeft: 0,
        },
        'NativeBase.Icon': {
          marginRight: 10,
          marginLeft: 0,
        },
      },
      '.iconRight': {
        'NativeBase.IconNB': {
          marginLeft: 10,
          marginRight: 0,
        },
        'NativeBase.Icon': {
          marginLeft: 10,
          marginRight: 0,
        },
      },
      '.picker': {
        'NativeBase.Text': {
          '.note': {
            fontSize: 16,
            lineHeight: null,
          },
        },
      },

      paddingVertical: variables.buttonPadding,
      paddingHorizontal: variables.buttonPadding + 10,
      backgroundColor: variables.btnPrimaryBg,
      borderRadius: variables.borderRadiusBase,
      borderColor: variables.btnPrimaryBg,
      borderWidth: null,
      height: 45,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      elevation: 2,
      shadowColor: (platformStyle==='material') ? '#000' : undefined,
      shadowOffset: (platformStyle==='material') ? {width: 0, height: 2} : undefined,
      shadowOpacity: (platformStyle==='material') ?  0.2 : undefined,
      shadowRadius: (platformStyle==='material') ? 1.2 : undefined,
      alignItems: 'center',
      justifyContent: 'space-between',
  };
  return buttonTheme;
};
