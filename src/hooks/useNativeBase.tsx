import { useColorMode } from './../color-mode';
import { useTheme } from './useTheme';

export function useNativeBase() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}
