import { findLastValidBreakpoint } from './../../theme/tools/utils';
import { theme } from '../../theme';

describe('mode', () => {
  // const theme = useTheme();
  test('First array value', () => {
    expect(findLastValidBreakpoint([1, 2], theme.breakpoints, 0)).toBe(1);
  });
  test('Middle array value', () => {
    expect(findLastValidBreakpoint([1, 2, 3], theme.breakpoints, 1)).toBe(2);
  });
  test('Last array value', () => {
    expect(findLastValidBreakpoint([1, 2, 3], theme.breakpoints, 2)).toBe(3);
  });
  test('First Object value', () => {
    expect(
      findLastValidBreakpoint({ base: 1, sm: 2, lg: 3 }, theme.breakpoints, 0)
    ).toBe(1);
  });
  test('Middle object value 1', () => {
    expect(
      findLastValidBreakpoint({ base: 1, sm: 2, lg: 3 }, theme.breakpoints, 1)
    ).toBe(2);
  });
  test('Middle object value 2', () => {
    expect(
      findLastValidBreakpoint({ base: 1, sm: 2, lg: 3 }, theme.breakpoints, 2)
    ).toBe(2);
  });
  test('Last object value', () => {
    expect(
      findLastValidBreakpoint({ base: 1, sm: 2, lg: 3 }, theme.breakpoints, 3)
    ).toBe(3);
  });
});
