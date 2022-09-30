export { useThemeProps } from './useProps';
export { usePropsResolution } from './usePropsResolution';
import type { ComponentTheme } from '../../theme';
import { usePropsResolutionWithComponentTheme } from './usePropsResolution';
import merge from 'lodash.merge';
import { getStyledObject } from '../../utils/getStyledComponentAndObjects';

export const useComponentThemePropsResolution = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  theme?: any
) => {
  const styleObj = getStyledObject(
    theme,
    '',
    componentTheme,
    {},
    merge({}, incomingProps),
    true
  );

  const resolvedPropsWithStateProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    merge({}, styleObj, incomingProps),
    theme,
    {}
  );
  console.log('styleObj', styleObj, incomingProps);
  console.log('resolvedPropsWithStateProps', resolvedPropsWithStateProps);
  return merge({}, styleObj, incomingProps);
};
