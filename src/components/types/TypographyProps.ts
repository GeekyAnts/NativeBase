import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';
import type { TypographyProps as ssTypographyProps } from 'styled-system';

/**
 * Types for typography related CSS properties
 */
export interface TypographyProps extends ssTypographyProps {
  /**
   * The CSS `word-break` property
   */
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>;
  /**
   * The CSS `overflow-wrap` property
   */
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>;
  /**
   * The CSS `text-overflow` property
   */
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>;
  /**
   * The CSS `text-transform` property
   */
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>;
  /**
   * The CSS `text-decoration` property
   */
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>;
  /**
   * The CSS `text-decoration` property
   */
  txtDecor?: ResponsiveValue<CSS.Property.TextDecoration>;
  /**
   * The CSS `text-decoration-line` property
   */
  textDecorationLine?: ResponsiveValue<CSS.Property.TextDecorationLine>;
}
