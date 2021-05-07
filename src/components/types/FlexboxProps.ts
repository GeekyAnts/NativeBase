import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';
// TODO: MORE flex type exists than before
import type { FlexboxProps as ssFlexBoxProps } from 'styled-system';

/**
 * Types for flexbox related CSS properties
 */
export interface FlexboxProps extends ssFlexBoxProps {
  /**
   * The CSS `flex-direction` property
   */
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection>;
}
