import { Platform } from 'react-native';
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
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginRight: 2
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
            fontSize: variables.iconHeaderSize,
            marginTop: 2,
            marginLeft: 2
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
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    backgroundColor: variables.toolbarDefaultBg,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 0,
    borderBottomColor: '#ddd',
    height: variables.toolbarHeight,
    elevation: 3,
    top: 0,
    left: 0,
    right: 0,
  };


  return headerTheme;
};
