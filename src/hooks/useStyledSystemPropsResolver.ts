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

export const resolvePropsToStyle = (
  styledSystemProps: any,
  propStyle: any,
  theme: any,
  debug: any,
  currentBreakpoint: any,
  strictMode: any,
  getResponsiveStyles?: any,
  name?: string
) => {
  if (name == 'Button') console.log(styledSystemProps, 'flattenprops');

  const { styleSheet, dataSet } = getStyleAndFilteredProps({
    styledSystemProps,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    // getResponsiveStyles,
  });

  if (name == 'Button') console.log(styleSheet, 'flattenprops');

  if (propStyle) {
    return { style: [styleSheet.box, propStyle], dataSet };
  } else {
    return { style: styleSheet.box, dataSet };
  }
};
export const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}: any) => {
  // console.time("useStyledSystemPropsResolver");
  // console.time("PROP_CONFIG");

  const theme = useTheme();

  const { currentBreakpoint, config } = useNativeBaseConfig(
    'makeStyledComponent'
  );
  const strictMode = config.strictMode;

  const { getResponsiveStyles } = useResponsiveQuery();
  // console.timeEnd("PROP_CONFIG");

  const { styledSystemProps, restProps } = getStyledSystemPropsAndRestProps(
    props
  );

  const { style, dataSet } = React.useMemo(() => {
    return resolvePropsToStyle(
      styledSystemProps,
      propStyle,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    stableHash(styledSystemProps),
    theme,
    currentBreakpoint,
    debug,
    strictMode,
    stableHash(propStyle),
    getResponsiveStyles,
    stableHash(props),
  ]);

  // if (process.env.NODE_ENV === "development" && debug) {
  //   /* eslint-disable-next-line */
  //   console.log("style,resprops", currentBreakpoint);
  // }

  restProps.dataSet = dataSet;
  // console.timeEnd("useStyledSystemPropsResolver");

  return [style, restProps];
};
