import { Platform } from 'react-native';

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
      borderWidth: variables.borderWidth,
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
      alignSelf: 'stretch',
    },

    '.full': {
      alignSelf: 'stretch',
      margin: 0,
      borderRadius: 0,
    },

    // Assume icon button dimensions
    '.rounded': {
      paddingHorizontal: variables.btnHeight / 2,
      borderRadius: variables.btnHeight / 2,
      minWidth: 0,

      'NativeBase.Icon': {
        marginLeft: -variables.iconFontSize / 2,
        marginRight: -variables.iconFontSize / 2,
      },
      'NativeBase.IconNB': {
        marginLeft: -variables.iconFontSize / 2,
        marginRight: -variables.iconFontSize / 2,
      },
    },

    '.transparent': {
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
    },

    '.small': {
      height: variables.btnHeightSmall,
      'NativeBase.Text': {
        fontSize: variables.btnTextSizeSmall,
      },
    },

    '.large': {
      height: 60,
      'NativeBase.Text': {
        fontSize: variables.btnTextSizeLarge,
        lineHeight: 32,
      },
    },

    '.vertical': {
      flexDirection: 'row',
      height: null,
    },

    '.iconLeft': {
      '.rounded': {
        'NativeBase.IconNB': {
          paddingLeft: variables.btnPadding,
        },
        'NativeBase.Icon': {
          paddingLeft: variables.btnPadding,
        },
      },
      'NativeBase.IconNB': {
        marginRight: variables.btnPadding,
      },
      'NativeBase.Icon': {
        marginRight: variables.btnPadding,
      },
    },
    '.iconRight': {
      '.rounded': {
        'NativeBase.IconNB': {
          paddingRight: variables.btnPadding,
        },
        'NativeBase.Icon': {
          paddingRight: variables.btnPadding,
        },
      },
      'NativeBase.IconNB': {
        paddingRight: variables.btnPadding,
        marginLeft: variables.btnPadding,
      },
      'NativeBase.Icon': {
        paddingRight: variables.btnPadding,
        marginLeft: variables.btnPadding,
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


    'NativeBase.Text': {
      fontFamily: variables.btnFontFamily,
      marginHorizontal: 0,
      color: variables.inverseTextColor,
      fontSize: variables.btnTextSize,
      lineHeight: variables.btnLineHeight,
      // childPosition: 1
    },

    'NativeBase.Icon': {
      color: variables.inverseTextColor,
      fontSize: variables.iconFontSize,
    },
    'NativeBase.IconNB': {
      color: variables.inverseTextColor,
      fontSize: variables.iconFontSize,
    },

    paddingHorizontal: variables.btnPadding,
    backgroundColor: variables.btnPrimaryBg,
    borderRadius: variables.borderRadiusBase,
    borderColor: variables.btnPrimaryBg,
    borderWidth: null,
    margin: 4,
    height: variables.btnHeight,
    minWidth: (platformStyle === 'material') ? 64 : undefined,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    elevation: 2,
    shadowColor: (platformStyle === 'material') ? '#000' : undefined,
    shadowOffset: (platformStyle === 'material') ? { width: 0, height: 2 } : undefined,
    shadowOpacity: (platformStyle === 'material') ?  0.2 : undefined,
    shadowRadius: (platformStyle === 'material') ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return buttonTheme;
};
