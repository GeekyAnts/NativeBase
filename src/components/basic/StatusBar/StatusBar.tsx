import React, { forwardRef } from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
// import type { IStatusBarProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const StatusBar = forwardRef((props: StatusBarProps, ref: any) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <RNStatusBar {...props} ref={ref} />;
});
