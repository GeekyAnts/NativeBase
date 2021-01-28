import React from 'react';
import { useThemeProps } from './../../hooks/useThemeProps';
import { NativeBaseProvider } from 'native-base';
import { renderHook } from '@testing-library/react-hooks';

describe('useThemeProps', () => {
  const wrapper = ({ children }: any) => (
    <NativeBaseProvider>{children}</NativeBaseProvider>
  );
  test('Box component + no props', () => {
    const { result } = renderHook(() => useThemeProps('Box', {}), { wrapper });
    expect(result.current).toEqual({ style: {} });
  });

  test('Badge Component + no props', () => {
    const { result } = renderHook(() => useThemeProps('Badge', {}), {
      wrapper,
    });
    expect(result.current).toEqual({
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
      style: {},
    });
  });

  test('Badge + some props', () => {
    const { result } = renderHook(() => useThemeProps('Badge', { py: 3 }), {
      wrapper,
    });
    expect(result.current).toEqual({
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
      style: {},
    });
  });
});
