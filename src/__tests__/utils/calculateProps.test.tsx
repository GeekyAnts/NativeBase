import { calculateProps } from './../../hooks/useThemeProps/utils';
import { theme } from 'native-base';

describe('useCalculateProps', () => {
  const colorModeProps = {
    colorMode: 'light',
    toggleColorMode: () => {},
    setColorMode: () => {},
  };
  test('No component theme + no props', () => {
    expect(calculateProps(theme, colorModeProps, {}, {}, 750)).toEqual({});
  });

  test('Only component theme(Badge) + no props', () => {
    const componentTheme = (theme as any).components.Badge;
    expect(
      calculateProps(theme, colorModeProps, componentTheme, {}, 750)
    ).toEqual({
      px: 1,
      py: 1,
      textTransform: 'uppercase',
      fontSize: 'xs',
      borderRadius: 'lg',
      fontWeight: 'bold',
      bg: 'gray.100',
      color: 'gray.700',
      borderWidth: 1,
      borderColor: 'transparent',
    });
  });

  test('Component theme(Badge) + some props', () => {
    const componentTheme = (theme as any).components.Badge;
    expect(
      calculateProps(theme, colorModeProps, componentTheme, { py: 3 }, 750)
    ).toEqual({
      px: 1,
      py: 3,
      textTransform: 'uppercase',
      fontSize: 'xs',
      borderRadius: 'lg',
      fontWeight: 'bold',
      bg: 'gray.100',
      color: 'gray.700',
      borderWidth: 1,
      borderColor: 'transparent',
    });
  });
});
