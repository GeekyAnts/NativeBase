import { Config, system } from 'styled-system';
import type { ResponsiveValue } from './responsiveValue';
import type * as CSS from 'csstype';

const config: Config = {
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  txtDecor: { property: 'textDecoration' },
  textDecorationLine: { property: 'textDecorationLine' },
};

/**
 * Types for typography related CSS properties
 */
export interface customTypographyProps {
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

export const customTypography = system(config);
