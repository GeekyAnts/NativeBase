import type * as CSS from 'csstype';
import type { ResponsiveValue } from './responsiveValue';
import { Config, system } from 'styled-system';

const config: Config = {
  w: {
    property: 'width',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  d: {
    property: 'display',
  },
  boxSizing: true,
};

/**
 * Types for layout related CSS properties
 */
export interface customLayoutProps {
  /**
   * The CSS `display` property
   */
  d?: ResponsiveValue<CSS.Property.Display>;
  /**
   * The CSS `width` property
   */
  w?: ResponsiveValue<CSS.Property.Width>;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: ResponsiveValue<CSS.Property.Width>;
  /**
   * The CSS `max-width` property
   */
  maxW?: ResponsiveValue<CSS.Property.MaxWidth>;
  /**
   * The CSS `min-width` property
   */
  minW?: ResponsiveValue<CSS.Property.MinWidth>;
  /**
   * The CSS `height` property
   */
  h?: ResponsiveValue<CSS.Property.Height>;
  /**
   * The CSS `max-height` property
   */
  maxH?: ResponsiveValue<CSS.Property.MaxHeight>;
  /**
   * The CSS `min-height` property
   */
  minH?: ResponsiveValue<CSS.Property.MinHeight>;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>;
}

export const customLayout = system(config);
