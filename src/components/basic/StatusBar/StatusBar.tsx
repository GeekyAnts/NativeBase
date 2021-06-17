import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import type { IStatusBarProps } from './types';

export const StatusBar = (props: IStatusBarProps) => {
  return <RNStatusBar {...props} />;
};
