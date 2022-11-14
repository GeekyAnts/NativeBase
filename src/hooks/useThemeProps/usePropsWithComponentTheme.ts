import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';
import type { IStateProps } from './propsFlattener';

export function usePropsWithComponentTheme(
  localTheme: ComponentTheme,
  propsReceived: any,
  _state?: IStateProps
) {
  return usePropsResolutionWithComponentTheme(
    localTheme,
    propsReceived,
    _state
  );
}
