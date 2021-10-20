import type { ITheme } from '../theme/index';
import { useContext } from 'react';
import { NativeBaseContext } from './../core/NativeBaseContext';

export function useTheme<T extends object = ITheme>() {
  const theme = useContext(
    (NativeBaseContext as unknown) as React.Context<T | undefined>
  );
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<NativeBaseProvider />`'
    );
  }

  return theme;
}
