import { useNativeBaseConfig } from './../core/NativeBaseContext';

export function useTheme() {
  const theme = useNativeBaseConfig('useTheme').theme;
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<NativeBaseProvider />`'
    );
  }

  return theme;
}
