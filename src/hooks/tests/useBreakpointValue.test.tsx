import React from 'react';
import { useBreakpointValue } from '../../hooks/useBreakpointValue';
import { NativeBaseProvider } from '../../core/NativeBaseProvider';
import { renderHook } from '@testing-library/react-hooks';

describe('useBreakpointValue', () => {
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
  test('Empty array', () => {
    const { result } = renderHook(() => useBreakpointValue([]), {
      wrapper,
    });
    expect(result.current).toEqual([]);
  });
  test('Empty object', () => {
    const { result } = renderHook(() => useBreakpointValue({}), {
      wrapper,
    });
    expect(result.current).toEqual(undefined);
  });
  test('Basic array', () => {
    const { result } = renderHook(() => useBreakpointValue([1, 2, 3]), {
      wrapper,
    });
    expect(result.current).toEqual(2);
  });
  test('Basic Object', () => {
    const { result } = renderHook(
      () => useBreakpointValue({ base: 0, sm: 1, md: 2 }),
      {
        wrapper,
      }
    );
    expect(result.current).toEqual(1);
  });
});
