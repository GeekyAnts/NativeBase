import { usePropsResolutionWithComponentTheme } from './usePropsResolution';

export function usePropsWithComponentTheme(
  localTheme: any,
  propsReceived: any
) {
  return usePropsResolutionWithComponentTheme(localTheme, propsReceived);
}
