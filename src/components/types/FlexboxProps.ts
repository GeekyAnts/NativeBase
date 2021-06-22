import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';
// TODO: MORE flex type exists than before
import type { FlexboxProps as ssFlexboxProps } from 'styled-system';

/**
 * Types for flexbox related CSS properties
 */
export interface FlexboxProps extends ssFlexboxProps {
  /**
   * The CSS `flex-direction` property
   */
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection>;
}
