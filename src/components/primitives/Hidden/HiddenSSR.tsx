import React from 'react';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';
import type { IHiddenProps } from './types';
import { useColorMode } from '../../../core/color-mode/hooks';

export const HiddenSSR = React.memo(({ children, ...props }: IHiddenProps) => {
  const theme = useTheme();
  const breakPoints = Object.keys(theme.breakpoints);
  const currentColorMode = useColorMode();

  const { from, till, only, colorMode, platform } = props;

  if (children === null) return null;
  if (!from && !till && !only && !colorMode && !platform) {
    return null;
  } else if (
    (Array.isArray(platform) && platform.includes(Platform.OS)) ||
    platform === Platform.OS
  ) {
    return null;
  } else if (colorMode === currentColorMode.colorMode) {
    return null;
  }
  const display: any = {};

  if (till) {
    let flag = false;
    for (const i in breakPoints) {
      if (breakPoints[i] === till) {
        display[breakPoints[i]] = 'flex';
        flag = true;
      } else {
        display[breakPoints[i]] = flag ? 'flex' : 'none';
      }
    }
  }

  if (from) {
    let flag = false;
    for (const i in breakPoints) {
      if (breakPoints[i] === from || flag) {
        display[breakPoints[i]] = 'none';
        flag = true;
      } else {
        display[breakPoints[i]] = 'flex';
      }
    }
  }
  if (only) {
    if (Array.isArray(only)) {
      for (const i in breakPoints) {
        if (only.includes(breakPoints[i])) {
          display[breakPoints[i]] = 'none';
        } else {
          display[breakPoints[i]] = 'flex';
        }
      }
    } else {
      display[only] = 'none';
    }
  }

  return React.cloneElement(children, {
    display: display,
  });
});
