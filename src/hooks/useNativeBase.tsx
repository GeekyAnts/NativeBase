import { useColorMode } from './../core/color-mode';
import { useTheme } from './useTheme';

/**
 *
 * @returns object containing `colorMode` information and `theme` object
 */
export function useNativeBase() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}
