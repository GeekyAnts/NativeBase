import type * as CSS from 'csstype';
import type { ColorProps as ssColorProps } from 'styled-system';

export interface ColorProps extends ssColorProps {
  /**
   * The CSS `color` property
   * @deprecated Use `color` prop instead of non standard textColor
   */
  textColor?: CSS.Property.Color;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSS.Property.Color;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSS.Property.Color;
}
