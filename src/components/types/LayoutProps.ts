import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';
import type { LayoutProps as ssLayoutProps } from 'styled-system';

/**
 * Types for layout related CSS properties
 */
export interface LayoutProps extends ssLayoutProps {
  /**
   * The CSS `display` property
   */
  d?: ResponsiveValue<CSS.Property.Display>;
  /**
   * The CSS `width` property
   */
  w?: ResponsiveValue<CSS.Property.Width<string | number>>;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: ResponsiveValue<CSS.Property.Width<string | number>>;
  /**
   * The CSS `max-width` property
   */
  maxW?: ResponsiveValue<CSS.Property.MaxWidth<string | number>>;
  /**
   * The CSS `min-width` property
   */
  minW?: ResponsiveValue<CSS.Property.MinWidth<string | number>>;
  /**
   * The CSS `height` property
   */
  h?: ResponsiveValue<CSS.Property.Height<string | number>>;
  /**
   * The CSS `max-height` property
   */
  maxH?: ResponsiveValue<CSS.Property.MaxHeight<string | number>>;
  /**
   * The CSS `min-height` property
   */
  minH?: ResponsiveValue<CSS.Property.MinHeight<string | number>>;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>;
}
