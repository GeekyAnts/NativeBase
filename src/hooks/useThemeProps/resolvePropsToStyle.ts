import merge from 'lodash.merge';
import { isEmptyObj } from '../../utils/isEmptyObj';
import { getStyleAndFilteredProps } from '../../theme/styled-system';

export const resolvePropsToStyle = (
  styledSystemProps: any,
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
    unResolvedProps: stateUnResolvedProps,
    styleFromProps: inlineStyleFromProps,
    restDefaultProps: stateRestDefaultProps,
    dataSet: stateDataSet,
  } = getStyleAndFilteredProps({
    styledSystemProps: stateProps,
    theme,
    debug,
    currentBreakpoint,
    strictMode,
    getResponsiveStyles,
    platform,
  });

  const mergedStyle = merge.apply({}, [
    merge.apply({}, INTERNAL_themeStyle),
    styleFromProps,
    merge.apply({}, stateProps?.INTERNAL_themeStyle),
    inlineStyleFromProps,
  ]);

  return {
    style: mergedStyle,
    styleFromProps,
    unResolvedProps: merge(unResolvedProps, stateUnResolvedProps),
    restDefaultProps: merge(restDefaultProps, stateRestDefaultProps),
    dataSet: !isEmptyObj(stateDataSet) ? stateDataSet : dataSet,
  };
};
