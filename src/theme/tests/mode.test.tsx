import { mode } from './../../theme/tools/colors';
describe('mode', () => {
  test('default', () => {
    expect(mode('light', 'dark')({})).toBe('light');
  });
  test('light', () => {
    expect(mode('light', 'dark')({ colorMode: 'light' })).toBe('light');
  });
  test('dark', () => {
    expect(mode('light', 'dark')({ colorMode: 'dark' })).toBe('dark');
  });
});
