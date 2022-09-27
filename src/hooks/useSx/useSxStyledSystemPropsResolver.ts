import { useTheme } from '../useTheme';
import React from 'react';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { useResponsiveQuery } from '../../utils/useResponsiveQuery';
//@ts-ignore
import stableHash from 'stable-hash';
import { getStyledSystemPropsAndRestProps } from '../../utils/getStyledSystemPropsAndRestProps';
import { getStyleAndFilteredProps } from './getStyleAndFilteredProps';
export const useSxStyledSystemPropsResolver = ({
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

  const {
    styledSystemProps,
    // eslint-disable-next-line
    restProps: _rest,
  } = getStyledSystemPropsAndRestProps(props);

  // eslint-disable-next-line
  const { style, dataSet: _dataSet } = React.useMemo(() => {
    const { styleFromProps, dataSet } = getStyleAndFilteredProps({
      styledSystemProps,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles,
    });
    if (propStyle) {
      return { style: [styleFromProps, propStyle], dataSet };
    } else {
      return { style: styleFromProps, dataSet };
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

  return style;
};
