import type * as CSS from 'csstype';
import type { IShadow } from '../../theme/base/shadows';
import type { ResponsiveValue } from './responsiveValue';

export interface ShadowProps {
  /**
   * The `box-shadow` property
   */
  shadow?: ResponsiveValue<CSS.Property.BoxShadow | IShadow | number>;
}
