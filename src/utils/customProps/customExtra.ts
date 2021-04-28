import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';
import type { ResponsiveValue } from './responsiveValue';

const config: Config = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  willChange: true,
};

export interface customExtraProps {
  /**
   * The CSS `animation` property
   */
  animation?: ResponsiveValue<CSS.Property.Animation>;
  /**
   * The CSS `appearance` property
   */
  appearance?: ResponsiveValue<CSS.Property.Appearance>;
  /**
   * The CSS `visibility` property
   */
  visibility?: ResponsiveValue<CSS.Property.Visibility>;
  /**
   * The CSS `user-select` property
   */
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>;
  /**
   * The CSS `pointer-events` property
   */
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  /**
   * The CSS `cursor` property
   */
  cursor?: ResponsiveValue<CSS.Property.Cursor>;
  /**
   * The CSS `resize` property
   */
  resize?: ResponsiveValue<CSS.Property.Resize>;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>;
  /**
   * The CSS `object-psition` property
   */
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition>;
  /**
   * The CSS `float` property
   */
  float?: ResponsiveValue<CSS.Property.Float>;
  /**
   * The CSS `will-change` property
   */
  willChange?: ResponsiveValue<CSS.Property.WillChange>;
}

export const customExtra = system(config);
