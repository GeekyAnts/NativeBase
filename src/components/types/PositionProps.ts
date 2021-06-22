import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';
import type { PositionProps as ssPositionProps } from 'styled-system';

/**
 * Types for position CSS properties
 */
export interface PositionProps extends ssPositionProps {
  /**
   * The CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: ResponsiveValue<CSS.Property.Left<string | number>>;
  /**
   * The CSS `left`, and `right` property
   */
  insetX?: ResponsiveValue<CSS.Property.Left<string | number>>;
  /**
   * The CSS `top`, and `bottom` property
   */
  insetY?: ResponsiveValue<CSS.Property.Left<string | number>>;
  /**
   * The CSS `position` property
   */
  pos?: ResponsiveValue<CSS.Property.Position>;
}
