import React from 'react';
import { useThemeProps } from './../../hooks/useThemeProps';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import { renderHook } from '@testing-library/react-hooks';

describe('useThemeProps', () => {
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
        color: 'muted.900',
        fontSize: 'xs',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      px: 3,
      py: 1,
      borderRadius: 'pill',
      bg: 'muted.300',
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
        color: 'muted.900',
        fontSize: 'xs',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      px: 3,
      py: 3,
      borderRadius: 'pill',
      bg: 'muted.300',
      borderWidth: 1,
      borderColor: 'transparent',
    });
  });
});
