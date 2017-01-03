import { Platform } from 'react-native';
import _ from 'lodash';
import headerTheme from './Header';
import contentTheme from './Content';
import buttonTheme from './Button';
import titleTheme from './Title';
import inputGroupTheme from './InputGroup';
import badgeTheme from './Badge';
import checkBoxTheme from './CheckBox';
import cardTheme from './Card';
import radioTheme from './Radio';
import h3Theme from './H3';
import variable from './variables';

export default (variables = variable) => {
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
      ...headerTheme(variables),
    },

    'NativeBase.Button': {
      ...buttonTheme(variables),
    },

    'NativeBase.Title': {
      ...titleTheme(variables),
    },

    'NativeBase.InputGroup': {
      ...inputGroupTheme(variables),
    },

    'NativeBase.Badge': {
      ...badgeTheme(variables),
    },

    'NativeBase.CheckBox': {
      ...checkBoxTheme(variables),
    },

    'NativeBase.Radio': {
      ...radioTheme(variables),
    },

    'NativeBase.Card': {
      ...cardTheme(),
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
    'NativeBase.CardItem1': {
      '.cardBody': {
        flexDirection: 'column',
        'NativeBase.Text': {
          marginTop: 5,
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
      ...h3Theme(variables),
    },

    'NativeBase.Container': {
      flex: 1,
    },
    'NativeBase.Content': {
      ...contentTheme(variables),
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
