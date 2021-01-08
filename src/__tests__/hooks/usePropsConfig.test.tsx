import { usePropsConfig } from './../../hooks/usePropsConfig';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

describe('usePropsConfig', () => {
  test('Box component + no props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const { result } = renderHook(() => usePropsConfig('Box', {}), { wrapper });
    expect(result.current).toEqual({ style: {} });
  });

  test('Badge Component + no props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const { result } = renderHook(() => usePropsConfig('Badge', {}), {
      wrapper,
    });
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

  test('Badge + some props', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const { result } = renderHook(() => usePropsConfig('Badge', { py: 3 }), {
      wrapper,
    });
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
