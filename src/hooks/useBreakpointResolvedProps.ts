import React from 'react';
import type { ResponsiveValue } from '../components/types';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { resolveValueWithBreakpoint } from './useThemeProps/utils';
import { useTheme } from './../hooks/useTheme';

type IProps = {
  [key: string]: ResponsiveValue<number | string>;
};

type INewProps = {
  [key: string]: number | string;
};

export const useBreakpointResolvedProps = (props: IProps) => {
  const currentBreakpoint = useNativeBaseConfig('useBreakpointResolvedProps')
    .currentBreakpoint;
  const theme = useTheme();
  const newProps: INewProps = React.useMemo(() => {
    let newProps: INewProps = {};
    for (let key in props) {
      const rawValue = props[key];
      const value = resolveValueWithBreakpoint(
        rawValue,
        theme.breakpoints,
        currentBreakpoint,
        key
      );
      newProps[key] = value;
    }
    return newProps;
  }, [props, currentBreakpoint, theme.breakpoints]);

  return newProps;
};
