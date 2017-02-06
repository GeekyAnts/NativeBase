import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const tabTheme = {
   		'NativeBase.Button': {
        '.active': {
          'NativeBase.Text': {
            color: variables.activeTab,
            fontSize: variables.tabBarTextSize,
            lineHeight: 16,
            fontWeight: '700',
            paddingVertical: 3,
          },
          'NativeBase.Icon': {
            color: variables.toolbarDefaultBg,
          },
          'NativeBase.IconNB': {
            color: variables.toolbarDefaultBg,
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
          color: variables.toolbarDefaultBg,
        },
        'NativeBase.IconNB': {
          color: variables.toolbarDefaultBg,
        },
        'NativeBase.Text': {
          color: variables.activeTab,
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
      backgroundColor: variables.toolbarDefaultBg,
      borderColor: variables.btnDisabledBg,
  };


  return tabTheme;
};
