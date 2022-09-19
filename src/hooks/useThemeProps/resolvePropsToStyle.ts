import merge from 'lodash.merge';
import { getStyleAndFilteredProps } from '../../theme/styled-system';

export const resolvePropsToStyle = (
  styledSystemProps: any,
  propStyle: any,
  theme: any,
  platform: any,
  debug: any,
  currentBreakpoint: any,
  strictMode: any,
  getResponsiveStyles?: any,
  INTERNAL_themeStyle?: any,
  stateProps?: any
) => {
  let flattenInternalThemeProps = INTERNAL_themeStyle;
  let fontSize;

  if (Array.isArray(flattenInternalThemeProps)) {
    flattenInternalThemeProps = flattenInternalThemeProps.flat();
    fontSize = flattenInternalThemeProps[0]?.fontSize;
  } else {
    fontSize = flattenInternalThemeProps?.fontSize;
  }

  const modifiedStyledSytemProps = {
    fontSize,
    ...styledSystemProps,
  };

  const {
    unResolvedProps,
    styleFromProps,
    restDefaultProps,
    dataSet,
  } = getStyleAndFilteredProps({
    styledSystemProps: modifiedStyledSytemProps,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    getResponsiveStyles,
    platform,
  });

  const {
    // unResolvedProps: unResolvedProps1,
    styleFromProps: inlineStateStyleFromProps,
    // restDefaultProps: restDefaultProps1,
    // dataSet: dataSet1,
  } = getStyleAndFilteredProps({
    styledSystemProps: stateProps,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    getResponsiveStyles,
    platform,
  });

  // console.time('start_here');
  const mergedStyle = merge.apply({}, [
    merge.apply({}, INTERNAL_themeStyle),
    styleFromProps,
    merge.apply({}, stateProps?.INTERNAL_themeStyle),
    inlineStateStyleFromProps,
    propStyle ?? undefined,
  ]);
  // console.timeEnd('start_here');
  return {
    style: mergedStyle,
    styleFromProps,
    unResolvedProps,
    restDefaultProps,
    dataSet,
  };
};
