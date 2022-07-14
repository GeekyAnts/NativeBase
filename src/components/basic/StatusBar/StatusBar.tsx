import React, { forwardRef } from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
// import type { IStatusBarProps } from './types';

export const StatusBar = forwardRef((props: StatusBarProps, ref: any) => {
  return <RNStatusBar {...props} ref={ref} />;
});
