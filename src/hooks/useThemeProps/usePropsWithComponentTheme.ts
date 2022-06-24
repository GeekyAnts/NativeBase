import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';

export function usePropsWithComponentTheme(
  localTheme: ComponentTheme,
  propsReceived: any,
  theme: any
) {
  return usePropsResolutionWithComponentTheme(localTheme, propsReceived, theme);
}
