import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';
import type { IStateProps } from './propsFlattener';

export function usePropsWithComponentTheme(
  localTheme: ComponentTheme,
  propsReceived: any,
  state?: IStateProps
) {
  return usePropsResolutionWithComponentTheme(localTheme, propsReceived, state);
}
