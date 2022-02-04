import type { StyleSheet } from 'react-native';

type StyleSheetStyle = Parameters<typeof StyleSheet.create>[0]['initial'];

export type Query = {
  minWidth?: number;
  maxWidth?: number;
  style?: StyleSheetStyle | StyleSheetStyle[];
};

export type UseResponsiveQueryParams = {
  initial?: StyleSheetStyle | StyleSheetStyle[];
  query?: Query[];
  disableCSSMediaQueries?: boolean;
};

export type DataSet = { [key: string]: string };

export type GetResponsiveStylesParams = Omit<
  UseResponsiveQueryParams,
  'disableCSSMediaQueries'
>;

export type GetResponsiveStylesReturnType = {
  styles?: StyleSheetStyle[];
  dataSet?: DataSet;
};

export type UseResponsiveQueryReturnType = GetResponsiveStylesReturnType & {
  getResponsiveStyles: (
    params: GetResponsiveStylesParams
  ) => GetResponsiveStylesReturnType;
};
