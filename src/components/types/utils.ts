import type { ITheme } from '../../theme';
import type { ResponsiveValue } from './responsiveValue';

export type VariantType<
  Component extends keyof ITheme['components']
> = 'variants' extends keyof ITheme['components'][Component]
  ? ResponsiveValue<
      keyof ITheme['components'][Component]['variants'] | (string & {})
    >
  : unknown;
