import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

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
  outline?: CSS.Property.Outline;
  /**
   * The CSS `outline-offset` property
   */
  outlineOffset?: CSS.Property.OutlineOffset;
  /**
   * The CSS `outline-color` property
   */
  outlineColor?: CSS.Property.OutlineColor;
}

export const customOutline = system(config);
