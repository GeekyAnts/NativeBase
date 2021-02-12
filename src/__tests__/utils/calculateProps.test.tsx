import React from 'react';
import { calculateProps } from './../../hooks/useThemeProps/utils';
import { theme } from 'native-base';
import { renderHook } from '@testing-library/react-hooks';
import { NativeBaseProvider } from 'native-base';

describe('useCalculateProps', () => {
  const wrapper = ({ children }: any) => (
    <NativeBaseProvider>{children}</NativeBaseProvider>
  );
  const colorModeProps = {
    colorMode: 'light',
    toggleColorMode: () => {},
    setColorMode: () => {},
  };
  test('No component theme + no props', () => {
    const { result } = renderHook(
      () => calculateProps(theme, colorModeProps, {}, {}, 750),
      { wrapper }
    );
    expect(result.current).toEqual({});
  });

  test('Only component theme(Badge) + no props', () => {
    const componentTheme = (theme as any).components.Badge;
    const { result } = renderHook(
      () => calculateProps(theme, colorModeProps, componentTheme, {}, 750),
      { wrapper }
    );
    expect(result.current).toEqual({
      _text: {
        color: 'gray.700',
        fontSize: 'xs',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      px: 1,
      py: 1,
      borderRadius: 'lg',
      bg: 'gray.100',
      borderWidth: 1,
      borderColor: 'transparent',
    });
  });

  test('Component theme(Badge) + some props', () => {
    const componentTheme = (theme as any).components.Badge;
    const { result } = renderHook(
      () =>
        calculateProps(theme, colorModeProps, componentTheme, { py: 3 }, 750),
      { wrapper }
    );
    expect(result.current).toEqual({
      _text: {
        color: 'gray.700',
        fontSize: 'xs',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      px: 1,
      py: 3,
      borderRadius: 'lg',
      bg: 'gray.100',
      borderWidth: 1,
      borderColor: 'transparent',
    });
  });
});
