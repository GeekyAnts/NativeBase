import { getStyleAndFilteredProps, propConfig } from '../theme/styled-system';
import { useTheme } from './useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useNativeBaseConfig } from '../core/NativeBaseContext';
import { useResponsiveQuery } from '../utils/useResponsiveQuery';
//@ts-ignore
import stableHash from 'stable-hash';

const getStyledSystemPropsAndRestProps = (props: any) => {
  const styledSystemProps: any = {};
  const restProps: any = {};

  for (const key in props) {
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
  INTERNAL_themeStyle?: any
) => {
  const { styleSheet, dataSet } = getStyleAndFilteredProps({
    styledSystemProps,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    getResponsiveStyles,
  });

  // console.log(
  //   StyleSheet.flatten([INTERNAL_themeStyle, styleSheet.box, propStyle]),
  //   '3333 style system props'
  // );
  if (propStyle) {
    return {
      style: [INTERNAL_themeStyle, styleSheet.box, propStyle],
      dataSet,
    };
  } else {
    return { style: [INTERNAL_themeStyle, styleSheet.box], dataSet };
  }
};
export const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}: any) => {
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

  // console.log('useStyledSystemPropsResolver', restProps);

  const { style, dataSet } = React.useMemo(() => {
    const resolvedStyle = resolvePropsToStyle(
      styledSystemProps,
      propStyle,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles,
      restProps.INTERNAL_themeStyle
    );

    // console.log(
    //   StyleSheet.flatten(resolvedStyle.style),
    //   styledSystemProps,
    //   '******'
    // );

    return resolvedStyle;
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
