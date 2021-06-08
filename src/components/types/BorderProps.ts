import type * as CSS from 'csstype';
import type { ResponsiveValue } from './responsiveValue';
// TODO: More BorderProps exists
import type { BorderProps as ssBorderProps } from './theme';

export interface BorderProps<ThemeType> extends ssBorderProps<ThemeType> {}
