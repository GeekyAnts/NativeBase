import { getStyleAndFilteredProps, propConfig } from '../theme/styled-system';
import { useTheme } from './useTheme';
import React from 'react';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { useResponsiveQuery } from '../utils/useResponsiveQuery';
//@ts-ignore
import stableHash from 'stable-hash';

const getStyledSystemPropsAndRestProps = (props: any) => {
  const styledSystemProps: any = {};
  const restProps: any = {};

  for (let key in props) {
    if (key in propConfig) {
      styledSystemProps[key] = props[key];
    } else {
      restProps[key] = props[key];
    }
  }

  return { styledSystemProps, restProps };
};

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

  const { style, dataSet } = React.useMemo(() => {
    const { styleSheet, dataSet } = getStyleAndFilteredProps({
      styledSystemProps,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles,
    });
    if (propStyle) {
      return { style: [styleSheet.box, propStyle], dataSet };
    } else {
      return { style: styleSheet.box, dataSet };
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

  restProps.dataSet = dataSet;

  return [style, restProps];
};
