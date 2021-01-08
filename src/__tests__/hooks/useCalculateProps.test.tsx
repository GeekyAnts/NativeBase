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

  test('empty', () => {
    const wrapper = ({ children }: any) => (
      <NativeBaseProvider>{children}</NativeBaseProvider>
    );
    const { result } = renderHook(
      () => useCalculateProps(theme, colorModeProps, {}, {}),
      { wrapper }
    );
    expect(result.current).toEqual({ style: {} });
  });
});
