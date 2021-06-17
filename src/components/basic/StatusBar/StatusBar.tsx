import React from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
// import type { IStatusBarProps } from './types';

export const StatusBar = (props: StatusBarProps, ref: any) => {
  return <RNStatusBar {...props} ref={ref} />;
};
