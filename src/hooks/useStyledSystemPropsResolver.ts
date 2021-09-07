import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from './useTheme';
import React from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';

export const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}: any) => {
  const theme = useTheme();
  const currentBreakpoint = useNativeBaseConfig('makeStyledComponent')
    .currentBreakpoint;

  const { style, restProps } = React.useMemo(() => {
    const { styleSheet, restProps } = getStyleAndFilteredProps({
      ...props,
      theme,
      debug,
      currentBreakpoint,
    });
    if (propStyle) {
      return { style: [styleSheet.box, propStyle], restProps };
    } else {
      return { style: styleSheet.box, restProps };
    }
  }, [props, theme, propStyle, currentBreakpoint, debug]);
  if (debug) {
    /* eslint-disable-next-line */
    console.log('style,resprops', currentBreakpoint);
  }

  return [style, restProps];
};
