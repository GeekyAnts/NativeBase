import { getClosestBreakpoint } from './../../theme/tools/utils';
const defaultBreakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
describe('mode', () => {
  test('Base value', () => {
    expect(getClosestBreakpoint(defaultBreakpoints, 0)).toBe(0);
  });
  test('Base-Sm value', () => {
    expect(getClosestBreakpoint(defaultBreakpoints, 10)).toBe(0);
  });
  test('Sm value', () => {
    expect(getClosestBreakpoint(defaultBreakpoints, 480)).toBe(1);
  });
  test('Sm-md value', () => {
    expect(getClosestBreakpoint(defaultBreakpoints, 500)).toBe(1);
  });
  test('Lg value', () => {
    expect(getClosestBreakpoint(defaultBreakpoints, 1000)).toBe(3);
  });
});
