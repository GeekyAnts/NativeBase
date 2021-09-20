import type * as CSS from 'csstype';
import type { IColors } from '../../theme/base/colors';
import type { ColorProps as ssColorProps } from 'styled-system';
import type { ResponsiveValue } from './responsiveValue';

export interface ColorProps extends ssColorProps {
  /**
   * The CSS `color` property
   * @deprecated Use `color` prop instead of non standard textColor
   */
  textColor?: ResponsiveValue<IColors | CSS.Property.Color | (string & {})>;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: ResponsiveValue<IColors | CSS.Property.Color | (string & {})>;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: ResponsiveValue<IColors | CSS.Property.Color | (string & {})>;
}
