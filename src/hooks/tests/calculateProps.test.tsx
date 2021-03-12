import React from 'react';
import { calculateProps } from '../useThemeProps/utils';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import { theme } from '../../theme';
import { renderHook } from '@testing-library/react-hooks';

describe('useCalculateProps', () => {
  const wrapper = ({ children }: any) => (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {children}
    </NativeBaseProvider>
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
        color: 'gray.900',
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
        color: 'gray.900',
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
