import { Platform } from 'react-native';
import _ from 'lodash';

import variables from './variables';

export default () => {
  const theme = {
    variables,
    'NativeBase.Left': {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start',
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        alignSelf: null,
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
    },


    'NativeBase.Header': {
      '.noShadow': {
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,
      },
      'NativeBase.Button': {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        '.transparent': {
          'NativeBase.Text': {
            color: variables.tabBarActiveTextColor,
            fontWeight: '600',
          },
          'NativeBase.Icon': {
            color: variables.tabBarActiveTextColor,
          },
        },
        paddingHorizontal: 15,
      },
      '.searchBar': {
        'NativeBase.InputGroup': {
          'NativeBase.Icon': {
            backgroundColor: 'transparent',
            color: null,
            alignSelf: 'center',
          },
          'NativeBase.IconNB': {
            backgroundColor: 'transparent',
            color: null,
            alignSelf: 'center',
          },
          'NativeBase.Input': {
            alignSelf: 'center',
          },
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          height: (Platform.OS === 'ios') ? 30 : 40,
          borderColor: 'transparent',
          backgroundColor: (Platform.OS === 'ios') ? variables.toolbarInputColor : '#fff',
        },
        'NativeBase.Button': {
          padding: (Platform.OS === 'ios') ? undefined : 0,
          width: (Platform.OS === 'ios') ? undefined : 0,
          height: (Platform.OS === 'ios') ? undefined : 0,
          'NativeBase.Text': {
            width: (Platform.OS === 'ios') ? undefined : 0,
            height: (Platform.OS === 'ios') ? undefined : 0,
          },
        },
      },
      '.rounded': {
        'NativeBase.InputGroup': {
          borderRadius: (Platform.OS === 'ios') ? 25 : 0,
        },
      },
      'NativeBase.Left': {
        'NativeBase.Button': {
          '.transparent': {
            'NativeBase.Icon': {
              color: variables.topTabBarActiveTextColor,
            },
            'NativeBase.IconNB': {
              color: variables.topTabBarActiveTextColor,
            },
            'NativeBase.Text': {
              color: variables.topTabBarActiveTextColor,
            },
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: (Platform.OS === 'ios') ? 1 : 0.4,
        alignSelf: 'center',
        alignItems: 'flex-start',
      },
      'NativeBase.Body': {
        flex: 1,
        alignItems: (Platform.OS === 'ios') ? 'center' : 'flex-start',
        alignSelf: 'center',
        'NativeBase.Button': {
          alignSelf: 'center',
          '.transparent': {
            backgroundColor: 'transparent',
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.Text': {
            color: variables.titleFontColor,
          },
        },
      },
      'NativeBase.Right': {
        'NativeBase.Button': {
          '.transparent': {
            'NativeBase.Icon': {
              color: variables.topTabBarActiveTextColor,
            },
            'NativeBase.IconNB': {
              color: variables.topTabBarActiveTextColor,
            },
            'NativeBase.Text': {
              color: variables.topTabBarActiveTextColor,
            },
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
      },
      backgroundColor: variables.toolbarDefaultBg,
      flexDirection: 'row',
      paddingHorizontal: 10,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 15 : 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      height: variables.toolbarHeight,
      elevation: 3,
      top: 0,
      left: 0,
      right: 0,
    },


    'NativeBase.Button': {
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
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    'NativeBase.Title': {
      fontSize: variables.titleFontSize,
      color: variables.titleFontColor,
      textAlign: 'center',
      fontWeight: '700',
    },

    'NativeBase.InputGroup': {
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
    },

    'NativeBase.Badge': {
      '.primary': {
        backgroundColor: variables.btnPrimaryBg,
      },
      '.warning': {
        backgroundColor: variables.btnWarningBg,
      },
      '.info': {
        backgroundColor: variables.btnInfoBg,
      },
      '.success': {
        backgroundColor: variables.btnSuccessBg,
      },
      '.danger': {
        backgroundColor: variables.btnDangerBg,
      },
      'NativeBase.Text': {
        color: variables.badgeColor,
        fontSize: variables.fontSizeBase,
        lineHeight: variables.lineHeight - 1,
        textAlign: 'center',
      },
      backgroundColor: variables.badgeBg,
      padding: variables.badgePadding,
      paddingHorizontal: 6,
      alignSelf: 'flex-start',
      borderRadius: 13.5,
      height: 27,
    },

    'NativeBase.CheckBox': {
      '.checked': {
        'NativeBase.Icon': {
          color: variables.checkboxTickColor,
        },
        'NativeBase.IconNB': {
          color: variables.checkboxTickColor,
        },
        backgroundColor: variables.checkboxBgColor,
      },
      'NativeBase.Icon': {
        color: 'transparent',
        lineHeight: variables.CheckboxIconSize,
        marginTop: variables.CheckboxIconMarginTop,
        fontSize: variables.CheckboxFontSize,
      },
      'NativeBase.IconNB': {
        color: 'transparent',
        lineHeight: variables.CheckboxIconSize,
        marginTop: variables.CheckboxIconMarginTop,
        fontSize: variables.CheckboxFontSize,
      },
      borderRadius: variables.CheckboxRadius,
      overflow: 'hidden',
      width: variables.checkboxSize,
      height: variables.checkboxSize,
      borderWidth: variables.CheckboxBorderWidth,
      paddingLeft: variables.CheckboxPaddingLeft - 1,
      paddingBottom: variables.CheckboxPaddingBottom,
      borderColor: variables.checkboxBgColor,
      backgroundColor: 'transparent',
    },

    'NativeBase.Radio': {
      '.selected': {
        'NativeBase.Icon': {
          color: variables.radioSelectedColor,
        },
        'NativeBase.IconNB': {
          color: variables.radioSelectedColor,
        },
      },
      'NativeBase.Icon': {
        color: variables.radioColor,
        lineHeight: variables.radioBtnLineHeight,
        fontSize: variables.radioBtnSize,
      },
      'NativeBase.IconNB': {
        color: variables.radioColor,
        lineHeight: variables.radioBtnLineHeight,
        fontSize: variables.radioBtnSize,
      },
    },

    'NativeBase.Card': {
      '.transparent': {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        elevation: null,
      },
      marginVertical: 5,
      marginHorizontal: 2,
      flex: 1,
      borderWidth: variables.borderWidth,
      borderRadius: 2,
      borderColor: variables.listBorderColor,
      flexWrap: 'wrap',
      borderBottomWidth: 0,
      backgroundColor: variables.cardDefaultBg,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 2,
    },

    'NativeBase.CardItem': {
      'NativeBase.Left': {
        'NativeBase.Body': {
          'NativeBase.Text': {
            '.note': {
              color: variables.listNoteColor,
              fontWeight: '200',
              marginRight: 20,
            },
            fontWeight: '600',
          },
          flex: 1,
          marginLeft: 10,
          alignItems: null,
        },
        'NativeBase.Icon': {
          fontSize: variables.iconFontSize,
        },
        'NativeBase.IconNB': {
          fontSize: variables.iconFontSize,
        },
        'NativeBase.Text': {
          marginLeft: 10,
          alignSelf: 'center',
        },
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      '.cardBody': {
        flexDirection: 'column',
      },
      'NativeBase.Body': {
        'NativeBase.Text': {
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
            marginRight: 20,
          },
          lineHeight: 20,
        },
        flex: 1,
        alignItems: 'flex-start',
      },
      'NativeBase.Right': {
        'NativeBase.Badge': {
          alignSelf: null,
        },
        'NativeBase.Button': {
          alignSelf: null,
        },
        'NativeBase.Icon': {
          alignSelf: null,
        },
        'NativeBase.IconNB': {
          alignSelf: null,
        },
        'NativeBase.Text': {
          alignSelf: null,
        },
        'NativeBase.Thumbnail': {
          alignSelf: null,
        },
        'NativeBase.Image': {
          alignSelf: null,
        },
        'NativeBase.Radio': {
          alignSelf: null,
        },
        'NativeBase.Checkbox': {
          alignSelf: null,
        },
        'NativeBase.Switch': {
          alignSelf: null,
        },
      },
      '.header': {
        'NativeBase.Text': {
          fontSize: 17,
          fontWeight: '600',
        },
        borderBottomWidth: null,
      },
      '.footer': {
        'NativeBase.Text': {
          fontSize: 17,
          fontWeight: '600',
        },
      },
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200',
        },
        fontWeight: '500',
      },
      flexDirection: 'row',
      alignItems: 'center',
      padding: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      backgroundColor: variables.listBg,
      borderColor: variables.listBorderColor,
    },

    'NativeBase.H1': {
      color: variables.textColor,
      fontSize: variables.fontSizeH1,
      lineHeight: variables.lineHeightH1,
    },
    'NativeBase.H2': {
      color: variables.textColor,
      fontSize: variables.fontSizeH2,
      lineHeight: variables.lineHeightH2,
    },
    'NativeBase.H3': {
      color: variables.textColor,
      fontSize: variables.fontSizeH3,
      lineHeight: variables.lineHeightH3,
    },

    'NativeBase.Container': {
      flex: 1,
    },
    'NativeBase.Content': {
      '.padder': {
        padding: variables.contentPadding,
      },
      flex: 1,
      backgroundColor: 'transparent',
      marginBottom: (Platform.OS === 'ios') ? -40 : 23,
    },


    'NativeBase.Footer': {
      'NativeBase.Left': {
        'NativeBase.Button': {
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-start',
      },
      'NativeBase.Body': {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        'NativeBase.Button': {
          alignSelf: 'center',
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.Text': {
            color: variables.titleFontColor,
          },
        },
      },
      'NativeBase.Right': {
        'NativeBase.Button': {
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
      },
      backgroundColor: variables.footerDefaultBg,
      flexDirection: 'row',
      justifyContent: 'center',
      borderTopWidth: (Platform.OS === 'ios') ? 1 : undefined,
      borderColor: (Platform.OS === 'ios') ? '#cbcbcb' : undefined,
      height: variables.footerHeight,
      elevation: 3,
      position: 'absolute',
      bottom: (Platform.OS === 'ios') ? 0 : 23,
      left: 0,
      right: 0,
    },

    'NativeBase.Tabs': {
      flex: 1,
    },

    'NativeBase.FooterTab': {
      'NativeBase.Button': {
        '.active': {
          'NativeBase.Text': {
            color: variables.tabBarActiveTextColor,
            fontSize: (Platform.OS === 'ios') ? 14 : 12,
            lineHeight: 16,
          },
          'NativeBase.Icon': {
            color: variables.tabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.tabBarActiveTextColor,
          },
          backgroundColor: variables.tabActiveBgColor,
        },
        flexDirection: null,
        backgroundColor: 'transparent',
        borderColor: null,
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,
        alignSelf: 'center',
        flex: 1,
        height: variables.footerHeight,
        justifyContent: 'center',
        'NativeBase.Badge': {
          'NativeBase.Text': {
            fontSize: 11,
            lineHeight: 14,
          },
          position: 'absolute',
          zIndex: 99,
          top: -4,
          height: 18,
          padding: 1.7,
          paddingHorizontal: 3,
        },
        'NativeBase.Icon': {
          color: variables.tabBarTextColor,
        },
        'NativeBase.IconNB': {
          color: variables.tabBarTextColor,
        },
        'NativeBase.Text': {
          color: variables.tabBarTextColor,
          fontSize: variables.tabBarTextSize,
          lineHeight: 16,
        },
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      alignSelf: 'stretch',
    },

    'NativeBase.ListItem': {
      'NativeBase.InputGroup': {
        flex: 1,
        borderWidth: null,
        'NativeBase.Icon': {
          paddingRight: 5,
        },
        'NativeBase.IconNB': {
          paddingRight: 5,
        },
        'NativeBase.Input': {
          paddingHorizontal: 5,
        },
      },
      'NativeBase.CheckBox': {
        marginLeft: -10,
        marginRight: 10,
      },
      '.itemDivider': {
        borderBottomWidth: variables.borderWidth,
        height: variables.listItemHeight,
        marginLeft: null,
        padding: variables.listItemPadding,
        backgroundColor: variables.listDividerBg,
        flexDirection: 'row',
        borderColor: variables.listBorderColor,
        'NativeBase.Text': {
          fontSize: 16,
          fontWeight: '600',
        },
      },
      'NativeBase.Left': {
        'NativeBase.Body': {
          'NativeBase.Text': {
            '.note': {
              color: variables.listNoteColor,
              fontWeight: '200',
            },
            fontWeight: '600',
          },
          marginLeft: 10,
          alignItems: null,
          alignSelf: null,
        },
        'NativeBase.Icon': {
          width: variables.iconFontSize,
          fontSize: variables.iconFontSize,
          lineHeight: (Platform.OS === 'ios') ? 34 : undefined,
        },
        'NativeBase.IconNB': {
          width: variables.iconFontSize,
          fontSize: variables.iconFontSize,
          lineHeight: (Platform.OS === 'ios') ? 34 : undefined,
        },
        'NativeBase.Text': {
          marginLeft: 10,
          alignSelf: 'center',
        },
        flexDirection: 'row',
        marginLeft: -variables.listItemPadding,
      },
      'NativeBase.Body': {
        'NativeBase.Text': {
          marginHorizontal: variables.listItemPadding,
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
        },
        alignSelf: null,
        alignItems: null,
      },
      'NativeBase.Right': {
        'NativeBase.Badge': {
          alignSelf: null,
        },
        'NativeBase.Button': {
          alignSelf: null,
        },
        'NativeBase.Icon': {
          alignSelf: null,
        },
        'NativeBase.IconNB': {
          alignSelf: null,
        },
        'NativeBase.Text': {
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
          alignSelf: null,
        },
        'NativeBase.Thumbnail': {
          alignSelf: null,
        },
        'NativeBase.Image': {
          alignSelf: null,
        },
        'NativeBase.Radio': {
          alignSelf: null,
        },
        'NativeBase.Checkbox': {
          alignSelf: null,
        },
        'NativeBase.Switch': {
          alignSelf: null,
        },
        padding: null,
      },
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200',
          marginRight: 20,
        },
        alignSelf: 'center',
      },
      flexDirection: 'row',
      padding: variables.listItemPadding,
      marginLeft: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      backgroundColor: variables.listBg,
      borderColor: variables.listBorderColor,
    },

    'NativeBase.ListItem1': {
      'NativeBase.InputGroup': {
        'NativeBase.Icon': {
          paddingRight: 5,
        },
        'NativeBase.IconNB': {
          paddingRight: 5,
        },
        'NativeBase.Input': {
          '.inlineLabel': {

          },
          paddingHorizontal: 5,
        },
        flex: 1,
        borderWidth: null,
        margin: -10,
        borderBottomColor: 'transparent',
      },
      'NativeBase.CheckBox': {
        marginLeft: -10,
      },
      '.itemDivider': {
        borderBottomWidth: variables.borderWidth,
        height: variables.listItemHeight,
        marginLeft: null,
        padding: variables.listItemPadding,
        backgroundColor: variables.listDividerBg,
        flexDirection: 'row',
        borderColor: variables.listBorderColor,
        'NativeBase.Text': {
          fontSize: 16,
          fontWeight: '600',
        },
      },
      'NativeBase.Left': {
        'NativeBase.Body': {
          'NativeBase.Text': {
            '.note': {
              color: variables.listNoteColor,
              fontWeight: '200',
            },
            fontWeight: '600',
          },
          marginLeft: 10,
          alignItems: null,
          alignSelf: null,
        },
        'NativeBase.Icon': {
          width: variables.iconFontSize,
          fontSize: variables.iconFontSize,
          lineHeight: (Platform.OS === 'ios') ? 34 : undefined,
        },
        'NativeBase.IconNB': {
          width: variables.iconFontSize,
          fontSize: variables.iconFontSize,
          lineHeight: (Platform.OS === 'ios') ? 34 : undefined,
        },
        'NativeBase.Text': {
          marginLeft: 10,
          alignSelf: 'center',
        },
        flexDirection: 'row',
        marginLeft: -variables.listItemPadding,
      },
      'NativeBase.Body': {
        'NativeBase.Text': {
          marginHorizontal: variables.listItemPadding,
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
        },
        alignSelf: null,
        alignItems: null,
      },
      'NativeBase.Right': {
        'NativeBase.Badge': {
          alignSelf: null,
        },
        'NativeBase.Button': {
          alignSelf: null,
        },
        'NativeBase.Icon': {
          alignSelf: null,
        },
        'NativeBase.IconNB': {
          alignSelf: null,
        },
        'NativeBase.Text': {
          '.note': {
            color: variables.listNoteColor,
            fontWeight: '200',
          },
          alignSelf: null,
        },
        'NativeBase.Thumbnail': {
          alignSelf: null,
        },
        'NativeBase.Image': {
          alignSelf: null,
        },
        'NativeBase.Radio': {
          alignSelf: null,
        },
        'NativeBase.Checkbox': {
          alignSelf: null,
        },
        'NativeBase.Switch': {
          alignSelf: null,
        },
        padding: null,
      },
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200',
        },
        alignSelf: null,
      },
      flexDirection: 'row',
      padding: variables.listItemPadding,
      marginLeft: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      backgroundColor: variables.listBg,
      borderColor: variables.listBorderColor,
    },

    'NativeBase.Icon': {
      fontSize: variables.iconFontSize,
    },
    'NativeBase.IconNB': {
      fontSize: variables.iconFontSize,
    },
    'NativeBase.Text': {
      paddingHorizontal: 3,
    },
    'NativeBase.Spinner': {
      height: 80,
    },

    'NativeBase.Fab': {
      'NativeBase.Button': {
        alignItems: 'center',
        justifyContent: 'center',
        'NativeBase.Icon': {
          alignSelf: 'center',
        },
        'NativeBase.IconNB': {
          alignSelf: 'center',
        },
      },
    },


    'NativeBase.Item': {
      '.floatingLabel': {
        'NativeBase.Input': {
          height: 55,
          top: 10,
        },
      },
      '.fixedLabel': {
        'NativeBase.Label': {
          position: null,
          top: null,
          left: null,
          right: null,
          paddingLeft: 10,
          flex: 1,
          height: null,
          width: null,
          fontSize: variables.inputFontSize,
        },
        'NativeBase.Input': {
          flex: 2,
          fontSize: variables.inputFontSize,
        },
      },
      '.stackedLabel': {
        'NativeBase.Label': {
          position: null,
          top: null,
          left: null,
          right: null,
          paddingTop: 5,
          paddingLeft: 10,
          alignSelf: 'flex-start',
          fontSize: variables.inputFontSize,
        },
        'NativeBase.Input': {
          alignSelf: (Platform.OS === 'ios') ? 'stretch' : 'flex-start',
          flex: 1,
          width: (Platform.OS === 'ios') ? null : variables.deviceWidth - 25,
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: variables.inputFontSize,
        },
        flexDirection: null,
      },
      '.inlineLabel': {
        'NativeBase.Label': {
          position: null,
          top: null,
          left: null,
          right: null,
          paddingLeft: 10,
          paddingRight: 20,
          height: null,
          width: null,
          fontSize: variables.inputFontSize,
        },
        'NativeBase.Input': {
          paddingLeft: 5,
          fontSize: variables.inputFontSize,
        },
        flexDirection: 'row',
      },
      'NativeBase.Label': {
        position: 'absolute',
        top: 10,
        left: 15,
        right: 0,
        fontSize: variables.inputFontSize,
        color: variables.inputColorPlaceholder,
      },
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
        paddingRight: 5,
        paddingLeft: 10,
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
        borderRadius: 30,
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
    },
    'NativeBase.Label': {
      '.focused': {
        width: 0,
      },
    },
    'NativeBase.Textarea': {
      '.underline': {
        borderBottomWidth: 1,
        marginTop: 5,
        borderColor: variables.inputBorderColor,
      },
      '.bordered': {
        borderWidth: 1,
        marginTop: 5,
        borderColor: variables.inputBorderColor,
      },
      color: variables.textColor,
      paddingLeft: 10,
      paddingRight: 5,
      fontSize: 15,
      textAlignVertical: 'top',
    },

    'NativeBase.Tab': {
      'NativeBase.Button': {
        '.active': {
          'NativeBase.Text': {
            color: variables.activeTab,
            fontSize: (Platform.OS === 'ios') ? 14 : 12,
            lineHeight: 16,
            fontWeight: '700',
            paddingVertical: 3,
          },
          'NativeBase.Icon': {
            top: 3,
            color: variables.tabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            top: 3,
            color: variables.tabBarActiveTextColor,
          },
          borderBottomWidth: 3,
          borderRadius: null,
          borderColor: variables.activeTab,
        },
        'NativeBase.Badge': {
          'NativeBase.Text': {
            fontSize: 11,
            lineHeight: 14,
          },
          position: 'absolute',
          zIndex: 99,
          top: -4,
          marginLeft: 12,
          height: 18,
          padding: 1.7,
          paddingHorizontal: 3,
        },
        'NativeBase.Icon': {
          top: 3,
          color: variables.tabBarTextColor,
        },
        'NativeBase.IconNB': {
          top: 3,
          color: variables.tabBarTextColor,
        },
        'NativeBase.Text': {
          color: variables.activeTab,
          fontSize: variables.tabBarTextSize,
          lineHeight: 16,
          paddingVertical: 3,
        },
        flexDirection: null,
        backgroundColor: 'transparent',
        borderColor: null,
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,
        alignSelf: 'center',
        flex: 1,
        height: null,
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderRadius: null,
        borderColor: 'transparent',
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      borderBottomWidth: 0.5,
      borderColor: variables.btnDisabledBg,
    },
    'NativeBase.STabs': {
      flex: 1,
    },

    'NativeBase.TabBar': {
      '.tabIcon': {
        height: undefined,
      },
      '.vertical': {
        height: 60,
      },
      'NativeBase.Button': {
        '.transparent': {
          'NativeBase.Text': {
            fontSize: variables.tabFontSize,
            color: variables.sTabBarActiveTextColor,
            fontWeight: '400',
          },
          'NativeBase.IconNB': {
            color: variables.sTabBarActiveTextColor,
          },
        },
        'NativeBase.IconNB': {
          color: variables.sTabBarActiveTextColor,
        },
        'NativeBase.Text': {
          fontSize: variables.tabFontSize,
          color: variables.sTabBarActiveTextColor,
          fontWeight: '400',
        },
        '.isTabActive': {
          'NativeBase.Text': {
            fontWeight: '900',
          },
        },
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: null,
        borderBottomColor: 'transparent',
        backgroundColor: variables.tabBgColor,
      },
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
    },
    'NativeBase.ViewNB': {
      flex: 1,
      '.padder': {
          padding: variables.contentPadding,
      },
    },

  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === 'object') {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
