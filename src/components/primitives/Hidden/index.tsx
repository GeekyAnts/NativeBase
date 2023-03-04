import React from 'react';
import { memo } from 'react';
import type { IHiddenProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useBreakpointValue, useTheme, useToken } from '../../../hooks';
import { useColorMode } from '../../../core/color-mode/hooks';
import { Platform } from 'react-native';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { HiddenSSR } from './HiddenSSR';
export function Hidden({ isSSR, ...props }: IHiddenProps) {
  const {
    from,
    till,
    only,
    platform,
    colorMode,
    children,
  } = usePropsResolution(
    'Hidden',
    props,
    {},
    {
      ignoreProps: ['only', 'platform'],
    }
  );
  const { breakpoints } = useTheme();
  const currentColorMode = useColorMode();

  const breakpointValueObject = Object.keys(breakpoints).reduce(
    (obj: any, val: string) => {
      obj[val] = val;
      return obj;
    },
    {}
  );
  const breakpointValue = useBreakpointValue(breakpointValueObject);
  const [currentBreakpointValue] = useToken('breakpoints', [breakpointValue]);
  const [fromBreakPointValue] = useToken('breakpoints', [from]);
  const [tillBreakPointValue] = useToken('breakpoints', [till]);
  const isSSRProvider = useNativeBaseConfig('useBreakpointResolvedProps').isSSR;

  if (isSSR && isSSRProvider) return <HiddenSSR {...props} />;
  //if no prop is passed, it will hide the element wrapped with hidden
  if (!from && !till && !only && !colorMode && !platform) {
    return null;
  }

  //if from and till prop exists, it will hide the element wrapped accordingly
  else if (
    from &&
    till &&
    currentBreakpointValue >= fromBreakPointValue &&
    currentBreakpointValue < tillBreakPointValue
  ) {
    return null;
  }

  //if from prop exists, it will hide the element wrapped starting from that breakpoint.
  else if (from && !till && currentBreakpointValue >= fromBreakPointValue) {
    return null;
  }

  //if till prop exists, it will hide the element wrapped starting from  0 till that breakpoint.
  else if (till && !from && currentBreakpointValue < tillBreakPointValue) {
    return null;
  }

  //if only prop exists and is array, check that array consists current breakpoint value, and if that exists, hide on that breakpoint to next breakpoint.
  // if only prop is string, hide on that breakpoint to next breakpoint.
  else if (
    (Array.isArray(only) && only.includes(breakpointValue)) ||
    only === breakpointValue
  ) {
    return null;
  }
  //if platform prop exists and is array, check that array consists current platform value, and if that exists, hide on that platform.
  // if platform prop is string, hide on that platform.
  else if (
    (Array.isArray(platform) && platform.includes(Platform.OS)) ||
    platform === Platform.OS
  ) {
    return null;
  }
  //if colormode prop is valid string, hide on that colormode.
  else if (colorMode === currentColorMode.colorMode) {
    return null;
  }
  return children;
}

export default memo(Hidden);
export type { IHiddenProps };
