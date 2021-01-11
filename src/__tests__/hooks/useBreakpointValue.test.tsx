import React from 'react';
import { NativeBaseProvider, useBreakpointValue } from 'native-base';
import { renderHook } from '@testing-library/react-hooks';

describe('useBreakpointValue', () => {
  const wrapper = ({ children }: any) => (
    <NativeBaseProvider>{children}</NativeBaseProvider>
  );
  test('Empty array', () => {
    const { result } = renderHook(() => useBreakpointValue([]), {
      wrapper,
    });
    expect(result.current).toEqual(undefined);
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
