import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from './useTheme';
import React from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { useResponsiveQuery } from '../utils/useResponsiveQuery';
import { getStyledSystemPropsAndRestProps } from '../utils/getStyledSystemPropsAndRestProps';
//@ts-ignore
import stableHash from 'stable-hash';

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

  const { styledSystemProps, restProps } = getStyledSystemPropsAndRestProps(
    props
  );

  const { style, dataSet, styleFromProps } = React.useMemo(() => {
    const { styleSheet, dataSet, styleFromProps } = getStyleAndFilteredProps({
      styledSystemProps,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles,
    });
    if (propStyle) {
      return { style: [styleSheet.box, propStyle], dataSet, styleFromProps };
    } else {
      return { style: styleSheet.box, dataSet, styleFromProps };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    stableHash(styledSystemProps),
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    propStyle,
    getResponsiveStyles,
    props,
  ]);
  if (process.env.NODE_ENV === 'development' && debug) {
    /* eslint-disable-next-line */
    console.log('style,resprops', currentBreakpoint);
  }

  restProps.dataSet = { ...restProps.dataSet, ...dataSet };

  return [style, restProps, styleFromProps];
};
