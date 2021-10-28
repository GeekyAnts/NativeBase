import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';

export function usePropsWithComponentTheme(
  localTheme: ComponentTheme,
  propsReceived: any
) {
  return usePropsResolutionWithComponentTheme(localTheme, propsReceived);
}
