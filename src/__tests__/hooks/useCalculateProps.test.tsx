import { useCalculateProps } from './../../hooks/usePropsConfig';
import { NativeBaseProvider, theme } from 'native-base';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

describe('useCalculateProps', () => {
  const colorModeProps = {
    colorMode: 'light',
    toggleColorMode: () => {},
    setColorMode: () => {},
  };

  test('No component theme + no props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const { result } = renderHook(
      () => useCalculateProps(theme, colorModeProps, {}, {}),
      { wrapper }
    );
    expect(result.current).toEqual({ style: {} });
  });

  test('Only component theme(Badge) + no props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const componentTheme = (theme as any)['components']['Badge'];
    const { result } = renderHook(
      () => useCalculateProps(theme, colorModeProps, componentTheme, {}),
      { wrapper }
    );
    expect(result.current).toEqual({
      px: 1,
      py: 1,
      textTransform: 'uppercase',
      fontSize: 'xs',
      borderRadius: 'sm',
      fontWeight: 'bold',
      bg: 'gray.100',
      color: 'gray.700',
      borderWidth: 1,
      borderColor: 'transparent',
      style: {},
    });
  });

  test('Component theme(Badge) + some props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const componentTheme = (theme as any)['components']['Badge'];
    const { result } = renderHook(
      () => useCalculateProps(theme, colorModeProps, componentTheme, { py: 3 }),
      { wrapper }
    );
    expect(result.current).toEqual({
      px: 1,
      py: 3,
      textTransform: 'uppercase',
      fontSize: 'xs',
      borderRadius: 'sm',
      fontWeight: 'bold',
      bg: 'gray.100',
      color: 'gray.700',
      borderWidth: 1,
      borderColor: 'transparent',
      style: {},
    });
  });
});
