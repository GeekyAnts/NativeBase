import { getStyleAndFilteredProps } from '../theme/styled-system';
import { useTheme } from './useTheme';
import { useWindowDimensions } from 'react-native';
import { getClosestBreakpoint } from '../theme/tools';
import React from 'react';

export const useStyledSystemPropsResolver = ({
  style: propStyle,
  children,
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

  // const propsWithTheme = { ...props, theme };
  // let styleObject: any = {};
  // resolversForBox.forEach((resolver: any) => {
  //   styleObject = { ...styleObject, ...resolver(propsWithTheme) };
  // });

  // for (const property in styleObject) {
  //   if (
  //     typeof styleObject[property] === 'string' &&
  //     styleObject[property].includes('px')
  //   ) {
  //     styleObject[property] = parseInt(styleObject[property]);
  //   }
  // }

  return [style, restProps];
};
