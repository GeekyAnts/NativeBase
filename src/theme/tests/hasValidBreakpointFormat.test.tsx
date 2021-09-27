import { hasValidBreakpointFormat } from './../../theme/tools/utils';
import { theme as defaultTheme } from '../../theme';

describe('mode', () => {
  test('Empty array', () => {
    expect(hasValidBreakpointFormat([], defaultTheme.breakpoints)).toBe(false);
  });
  test('Array', () => {
    expect(hasValidBreakpointFormat([1, 2], defaultTheme.breakpoints)).toBe(
      true
    );
  });
  test('Valid Object', () => {
    expect(
      hasValidBreakpointFormat({ base: 1, sm: 2 }, defaultTheme.breakpoints)
    ).toBe(true);
  });
  test('Invalid Object', () => {
    expect(
      hasValidBreakpointFormat(
        { base: 1, sm: 2, ab: 1 },
        defaultTheme.breakpoints
      )
    ).toBe(false);
  });
});
