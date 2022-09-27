import type { ITheme } from '../..';
import { getStyledFromProps } from '../../utils/getStyledFromProps';
import type { UseResponsiveQueryParams } from '../../utils/useResponsiveQuery';
import { StyleSheet } from 'react-native';
export const getStyleAndFilteredProps = ({
  theme,
  currentBreakpoint,
  getResponsiveStyles,
  styledSystemProps,
}: any) => {
  let dataSet: any = {};

  const orderedBreakPoints = Object.entries(
    theme.breakpoints as ITheme['breakpoints']
  ).sort((a, b) => a[1] - b[1]);

  let { styleFromProps, responsiveStyles } = getStyledFromProps(
    styledSystemProps,
    theme,
    currentBreakpoint
  );

  if (responsiveStyles) {
    const query: UseResponsiveQueryParams = { query: [] };
    orderedBreakPoints.forEach((o) => {
      const key = o[0];
      if (key === 'base') {
        if (responsiveStyles) query.initial = responsiveStyles.base;
      } else {
        if (responsiveStyles)
          if (key in responsiveStyles) {
            query?.query?.push({
              minWidth: o[1],
              style: responsiveStyles[key],
            });
          }
      }
    });

    const { dataSet: newDataSet, styles } = getResponsiveStyles(query);
    dataSet = { ...dataSet, ...newDataSet };
    styleFromProps = { ...styleFromProps, ...StyleSheet.flatten(styles) };
  }

  return {
    styleFromProps,
    dataSet,
  };
};
