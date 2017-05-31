import { Platform, PixelRatio } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const headerTheme = {
    '.span': {
      height: 128,
      'NativeBase.Left': {
        alignSelf: 'flex-start',
      },
      'NativeBase.Body': {
        alignSelf: 'flex-end',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingBottom: 26,
      },
      'NativeBase.Right': {
        alignSelf: 'flex-start',
      },
    },
    '.hasSubtitle': {
      'NativeBase.Body': {
        'NativeBase.Title': {
          fontSize: variables.titleFontSize - 2,
          fontFamily: variables.titleFontfamily,
          textAlign: 'center',
        },
        'NativeBase.Subtitle': {
          fontSize: variables.subTitleFontSize,
          fontFamily: variables.titleFontfamily,
          color: variables.subtitleColor,
          textAlign: 'center',
        },
      },
    },
    '.noShadow': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
    },
    '.hasTabs': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      borderBottomWidth: null,
    },
    '.hasSegment': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      borderBottomWidth: null,
    },
    'NativeBase.Button': {
      alignSelf: 'center',
      margin: 0,
      '.transparent': {
        'NativeBase.Text': {
          color: variables.toolbarBtnColor,
          fontWeight: '600',
        },
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
        },
      },
    },
    '.searchBar': {
      'NativeBase.Item': {
        'NativeBase.Icon': {
          backgroundColor: 'transparent',
          color: variables.dropdownLinkColor,
          fontSize: variables.toolbarSearchIconSize,
          alignItems: 'center',
          marginTop: 2,
          paddingRight: 10,
          paddingLeft: 10,
        },
        'NativeBase.IconNB': {
          backgroundColor: 'transparent',
          color: null,
          alignSelf: 'center',
        },
        'NativeBase.Input': {
          alignSelf: 'center',
          lineHeight: 24,
          height: variables.searchBarHeight,
        },
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        height: variables.searchBarHeight,
        borderColor: 'transparent',
        backgroundColor: variables.toolbarInputColor,
      },
      'NativeBase.Button': {
        '.transparent': {
          'NativeBase.Text': {
            fontWeight: '500',
          },
          paddingHorizontal: null,
          paddingLeft: (platform === 'ios') ? 10 : null,
        },
        paddingHorizontal: (platform === 'ios') ? undefined : null,
        width: (platform === 'ios') ? undefined : 0,
        height: (platform === 'ios') ? undefined : 0,
      },
    },
    '.rounded': {
      'NativeBase.Item': {
        borderRadius: ((platform === 'ios') && (platformStyle!=='material')) ? 25 : 3,
      },
    },
    'NativeBase.Left': {
      'NativeBase.Button': {
        '.hasText': {
          marginLeft: -10,
          height: 30,
          'NativeBase.Icon': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
          'NativeBase.Text': {
            color: variables.toolbarBtnColor,
            fontSize: 17,
            marginLeft: 2,
            lineHeight: 21
          },
          'NativeBase.IconNB': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
        },
        '.transparent': {
          'NativeBase.Icon': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
          },
          'NativeBase.IconNB': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
          },
          'NativeBase.Text': {
            color: variables.toolbarBtnColor,
          },
        },
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
        },
        alignSelf: null,
        margin: 0,
      },
      flex: ((platform === 'ios') && (platformStyle !== 'material')) ? 1 : 0.5,
      alignSelf: 'center',
      alignItems: 'flex-start',
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems: ((platform === 'ios') && (platformStyle !== 'material')) ? 'center' : 'flex-start',
      alignSelf: 'center',
      'NativeBase.Segment': {
        borderWidth: 0,
        alignSelf: 'flex-end',
        marginRight: (platform === 'ios') ? -40 : -55
      },
      'NativeBase.Button': {
        alignSelf: 'center',
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
        },
        'NativeBase.Text': {
          color: variables.inverseTextColor,
        },
      },
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        '.transparent': {
          'NativeBase.Text': {
            color: variables.toolbarBtnColor,
          },
          'NativeBase.Icon': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
          },
          'NativeBase.IconNB': {
            color: variables.toolbarBtnColor,
            fontSize: variables.iconHeaderSize,
          },
          margin: 0,
          minWidth: 0,
        },
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
        },
        alignSelf: null,
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    backgroundColor: variables.toolbarDefaultBg,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (platform === 'ios') ? 15 : 0,
    borderBottomWidth: (platform === 'ios') ? (1/PixelRatio.getPixelSizeForLayoutSize(1)) : 0,
    borderBottomColor: variables.toolbarDefaultBorder,
    height: variables.toolbarHeight,
    elevation: 4,
    shadowColor: (platformStyle === 'material') ? '#000' : undefined,
    shadowOffset: (platformStyle === 'material') ? { width: 0, height: 2 } : undefined,
    shadowOpacity: (platformStyle === 'material') ?  0.2 : undefined,
    shadowRadius: (platformStyle === 'material') ? 1.2 : undefined,
    top: 0,
    left: 0,
    right: 0,
  };


  return headerTheme;
};