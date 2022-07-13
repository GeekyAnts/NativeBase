import {
  findLastValidBreakpoint,
  hasValidBreakpointFormat,
} from '../../theme/tools';
export const resolveValueWithBreakpoint = (
  values: any,
  breakpointTheme: any,
  currentBreakpoint: number,
  property: any
) => {
  if (hasValidBreakpointFormat(values, breakpointTheme, property)) {
    // Check the last valid breakpoint value from all values
    // If current breakpoint is `md` and we have `base` then `lg`, then last value will be taken(`base` in this case)
    return findLastValidBreakpoint(values, breakpointTheme, currentBreakpoint);
  } else {
    return values;
  }
};
