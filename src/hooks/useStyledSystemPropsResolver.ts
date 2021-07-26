import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from './useTheme';
import { useWindowDimensions } from 'react-native';
import { getClosestBreakpoint } from '../theme/tools';
import React from 'react';

export const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}: any) => {
  const theme = useTheme();
  const windowWidth = useWindowDimensions().width;

  const currentBreakpoint = React.useMemo(
    //@ts-ignore
    () => getClosestBreakpoint(theme.breakpoints, windowWidth),
    //@ts-ignore
    [windowWidth, theme.breakpoints]
  );

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
    console.log('style,resprops', currentBreakpoint);
  }

  return [style, restProps];
};
