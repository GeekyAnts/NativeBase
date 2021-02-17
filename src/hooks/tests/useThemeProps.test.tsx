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
    expect(result.current).toEqual({});
  });

  test('Badge Component + no props', () => {
    const { result } = renderHook(() => useThemeProps('Badge', {}), {
      wrapper,
    });
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

  test('Badge + some props', () => {
    const { result } = renderHook(() => useThemeProps('Badge', { py: 3 }), {
      wrapper,
    });
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
