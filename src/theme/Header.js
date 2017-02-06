import { Platform, PixelRatio } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const headerTheme = {
    '.hasSubtitle': {
      'NativeBase.Body': {
        'NativeBase.Title': {
          fontSize: variables.titleFontSize - 2,
          fontFamily: variables.titleFontfamily,
          color: variables.titleFontColor,
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
      borderBottomWidth: null,
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
        'NativeBase.IconNB': {
          color: variables.tabBarActiveTextColor,
        },
        paddingHorizontal: variables.buttonPadding,
      },
      paddingHorizontal: 15,
    },
    '.searchBar': {
      'NativeBase.Item': {
        'NativeBase.Icon': {
          backgroundColor: 'transparent',
          color: variables.dropdownLinkColor,
          fontSize: (Platform.OS === 'ios') ? variables.iconFontSize - 10 : variables.iconFontSize - 5,
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
          marginTop: 2,
          lineHeight: 24,
          height: 50,
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
        '.transparent': {
          'NativeBase.Text': {
            fontWeight: '500',
          },
          paddingHorizontal: null,
          paddingLeft: (Platform.OS === 'ios') ? 10 : null,
        },
        paddingHorizontal: (Platform.OS === 'ios') ? undefined : null,
        width: (Platform.OS === 'ios') ? undefined : 0,
        height: (Platform.OS === 'ios') ? undefined : 0,
      },
    },
    '.rounded': {
      'NativeBase.Item': {
        borderRadius: (Platform.OS === 'ios') ? 25 : 0,
      },
    },
    'NativeBase.Left': {
      'NativeBase.Button': {
        '.hasText': {
          marginLeft: -10,
          height: 30,
          'NativeBase.Icon': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
          'NativeBase.Text': {
            color: variables.iosToolbarBtnColor,
            fontSize: 17,
            marginLeft: 2,
            lineHeight: 21
          },
          'NativeBase.IconNB': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
        },
        '.transparent': {
          marginLeft: -3,
          'NativeBase.Icon': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2
          },
          'NativeBase.IconNB': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2
          },
          'NativeBase.Text': {
            color: variables.iosToolbarBtnColor,
            fontSize: 17,
            top: (Platform.OS === 'ios') ? undefined : -1.5,
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
          color: variables.iosToolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.iosToolbarBtnColor,
        },
        alignSelf: null,
        paddingHorizontal: variables.buttonPadding,
      },
      flex: (Platform.OS === 'ios') ? 1 : 0.5,
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
          color: variables.iosToolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.iosToolbarBtnColor,
        },
        'NativeBase.Text': {
          color: variables.titleFontColor,
        },
      },
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        '.hasText': {
          height: 30,
          'NativeBase.Icon': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize-2,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 5
          },
          'NativeBase.Text': {
            color: variables.iosToolbarBtnColor,
            fontSize: 17,
            lineHeight: 21
          },
          'NativeBase.IconNB': {
            color: variables.iosToolbarBtnColor,
            fontSize: variables.iconHeaderSize-2,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 5
          },
        },
        '.transparent': {
          marginRight: -3,
          'NativeBase.Icon': {
            color: variables.iosToolbarBtnColor,
            fontSize: (Platform.OS==='ios') ? variables.iconHeaderSize-6 : variables.iconHeaderSize-2,
            marginTop: 2,
            marginLeft: 2,
            marginRight: 2
          },
          'NativeBase.IconNB': {
            color: variables.iosToolbarBtnColor,
            fontSize: (Platform.OS==='ios') ? variables.iconHeaderSize-6 : variables.iconHeaderSize-2,
            marginTop: 2,
            marginLeft: 2,
            marginRight: 2
          },
          'NativeBase.Text': {
            color: variables.iosToolbarBtnColor,
            fontSize: 17,
            top: (Platform.OS === 'ios') ? undefined : -1.5,
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
          color: variables.iosToolbarBtnColor,
        },
        'NativeBase.IconNB': {
          color: variables.iosToolbarBtnColor,
        },
        alignSelf: null,
        paddingHorizontal: variables.buttonPadding,
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
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    borderBottomWidth: (Platform.OS === 'ios') ? (1/PixelRatio.getPixelSizeForLayoutSize(1)) : 0,
    borderBottomColor: '#a7a6ab',
    height: variables.toolbarHeight,
    elevation: 3,
    top: 0,
    left: 0,
    right: 0,
  };


  return headerTheme;
};
