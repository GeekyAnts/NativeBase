import type * as CSS from 'csstype';
import type { ColorProps as ssColorProps } from './theme';

export interface ColorProps<ThemeType> extends ssColorProps<ThemeType> {
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSS.Property.Color;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSS.Property.Color;
}
