import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';
import type { ResponsiveValue } from './responsiveValue';

/**
 * The parser configuration for common outline properties
 */
const config: Config = {
  outline: true,
  outlineOffset: true,
  outlineColor: {
    property: 'outlineColor',
    scale: 'colors',
  },
};

export interface customOutlineProps {
  /**
   * The CSS `outline` property
   */
  outline?: ResponsiveValue<CSS.Property.Outline<string | number>>;
  /**
   * The CSS `outline-offset` property
   */
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<string | number>>;
  /**
   * The CSS `outline-color` property
   */
  outlineColor?: ResponsiveValue<CSS.Property.OutlineColor>;
}

export const customOutline = system(config);
