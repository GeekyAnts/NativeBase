import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const footerTabTheme = {
      'NativeBase.Button': {
        '.active': {
          'NativeBase.Text': {
            color: variables.tabBarActiveTextColor,
            fontSize: variables.tabBarTextSize,
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
            fontWeight: (Platform.OS === 'ios') ? '600' : undefined,
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
  };


  return footerTabTheme;
};
