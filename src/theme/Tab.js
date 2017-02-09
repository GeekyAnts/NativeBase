import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;
  
  const tabTheme = {
       'NativeBase.Button': {
        '.active': {
          'NativeBase.Text': {
            color: variables.topTabBarActiveTextColor,
            fontSize: variables.tabBarTextSize,
            lineHeight: 16,
            fontWeight: '700',
            paddingVertical: 3,
          },
          'NativeBase.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'NativeBase.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          borderBottomWidth: 3,
          borderRadius: null,
          borderColor: variables.topTabBarBorderColor,
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
          color: variables.topTabBarActiveTextColor,
        },
        'NativeBase.IconNB': {
          color: variables.topTabBarActiveTextColor,
        },
        'NativeBase.Text': {
          color: variables.topTabBarActiveTextColor,
          fontSize: variables.tabBarTextSize,
          lineHeight: 16,
          paddingVertical: 3,
        },
        '.vertical': {
          flexDirection: null,
        },
        flexDirection: 'row',
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
      elevation: 3,
      shadowColor: (platformStyle==='material') ? '#000' : undefined,
      shadowOffset: (platformStyle==='material') ? {width: 0, height: 2} : undefined,
      shadowOpacity: (platformStyle==='material') ?  0.2 : undefined,
      shadowRadius: (platformStyle==='material') ? 1.2 : undefined,
      backgroundColor: variables.tabDefaultBg,
      borderColor: variables.btnDisabledBg,
  };


  return tabTheme;
};
