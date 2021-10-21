import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from './useTheme';
import React from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { useResponsiveQuery } from '../utils/react-native-responsive-query';

export const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}: any) => {
  const theme = useTheme();
  const { currentBreakpoint, config } = useNativeBaseConfig(
    'makeStyledComponent'
  );
  const strictMode = config.strictMode;

  const { getResponsiveStyles } = useResponsiveQuery();

  const { style, restProps } = React.useMemo(() => {
    const { styleSheet, restProps } = getStyleAndFilteredProps({
      ...props,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles,
    });
    if (propStyle) {
      return { style: [styleSheet.box, propStyle], restProps };
    } else {
      return { style: styleSheet.box, restProps };
    }
  }, [
    props,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    propStyle,
    getResponsiveStyles,
  ]);
  if (debug) {
    /* eslint-disable-next-line */
    console.log('style,resprops', currentBreakpoint);
  }

  return [style, restProps];
};
