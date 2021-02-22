import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';
import type { ResponsiveValue } from './responsiveValue';

const config: Config = {
  pos: {
    property: 'position',
  },
  inset: {
    properties: ['left', 'top', 'bottom', 'right'],
    scale: 'space',
  },
  insetX: {
    properties: ['left', 'right'],
    scale: 'space',
  },
  insetY: {
    properties: ['top', 'bottom'],
    scale: 'space',
  },
};

/**
 * Types for position CSS properties
 */
export interface customPositionProps {
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

export const customPosition = system(config);
