import { useWindowDimensions } from 'react-native';
import {
  getClosestBreakpoint,
  hasValidBreakpointFormat,
  findLastValidBreakpoint,
} from '../theme/tools';
import { useTheme } from './../hooks/useTheme';

export function useBreakpointValue(
  values: Object | Array<string | number | Object>
) {
  let windowWidth = useWindowDimensions()?.width;
  const theme = useTheme();

  if (hasValidBreakpointFormat(values, theme.breakpoints)) {
    let currentBreakpoint = getClosestBreakpoint(
      theme.breakpoints,
      windowWidth
    );
    return findLastValidBreakpoint(
      values,
      theme.breakpoints,
      currentBreakpoint
    );
  } else {
    return values;
  }
}
