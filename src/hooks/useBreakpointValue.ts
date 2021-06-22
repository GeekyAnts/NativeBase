import { useWindowDimensions } from 'react-native';
import {
  getClosestBreakpoint,
  hasValidBreakpointFormat,
  findLastValidBreakpoint,
} from '../theme/tools';
import { useTheme } from './../hooks/useTheme';

export function useBreakpointValue(values: any) {
  let windowWidth = useWindowDimensions()?.width;
  const theme = useTheme();
  if (hasValidBreakpointFormat(values)) {
    let currentBreakpoint = getClosestBreakpoint(
      theme.breakpoints,
      windowWidth
    );
    return findLastValidBreakpoint(values, currentBreakpoint);
  } else {
    return values;
  }
}
