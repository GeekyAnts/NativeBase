import { hasValidBreakpointFormat } from './../../theme/tools/utils';
describe('mode', () => {
  test('Empty array', () => {
    expect(hasValidBreakpointFormat([])).toBe(false);
  });
  test('Array', () => {
    expect(hasValidBreakpointFormat([1, 2])).toBe(true);
  });
  test('Valid Object', () => {
    expect(hasValidBreakpointFormat({ base: 1, sm: 2 })).toBe(true);
  });
  test('Invalid Object', () => {
    expect(hasValidBreakpointFormat({ base: 1, sm: 2, ab: 1 })).toBe(false);
  });
});
