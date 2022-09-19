import { StyleSheet } from 'react-native';
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

  if (propStyle) {
    return {
      style: [
        INTERNAL_themeStyle,
        styleFromProps,
        stateProps?.INTERNAL_themeStyle,
        inlineStateStyleFromProps,
        propStyle,
      ],
      styleFromProps,
      unResolvedProps,
      restDefaultProps,

      dataSet,
    };
  } else {
    console.log(
      StyleSheet.create([
        INTERNAL_themeStyle,
        styleFromProps,
        // StyleSheet.create(stateProps?.INTERNAL_themeStyle),
        // stateProps?.INTERNAL_themeStyle,
        inlineStateStyleFromProps,
      ]),
      stateProps?.INTERNAL_themeStyle,

      'resolvedStyles###'
    );

    return {
      style: StyleSheet.create([
        INTERNAL_themeStyle,
        styleFromProps,
        // StyleSheet.create(stateProps?.INTERNAL_themeStyle),
        // stateProps?.INTERNAL_themeStyle,
        inlineStateStyleFromProps,
      ]),
      styleFromProps,
      unResolvedProps,
      restDefaultProps,

      dataSet,
    };
  }
};
