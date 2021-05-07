import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';

export interface ExtraProps {
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

export interface ListProps {
  listStyleType?: CSS.Property.ListStyleType;
  /**
   * The CSS `list-style-position` property
   */
  listStylePosition?: CSS.Property.ListStylePosition;
  /**
   * The CSS `list-style-position` property
   */
  listStylePos?: CSS.Property.ListStylePosition;
  /**
   * The CSS `list-style-image` property
   */
  listStyleImage?: CSS.Property.ListStyleImage;
  /**
   * The CSS `list-style-image` property
   */
  listStyleImg?: CSS.Property.ListStyleImage;
}

export interface OutlineProps {
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
  /**
   * The CSS `outline-width` property
   */
  outlineWidth?: ResponsiveValue<CSS.Property.OutlineWidth<string | number>>;
  /**
   * The CSS `outline-style` property
   */
  outlineStyle?: ResponsiveValue<CSS.Property.OutlineStyle>;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: CSS.Property.Transform;
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: CSS.Property.TransformOrigin;
}

export interface TransitionProps {
  /**
   * The CSS `transition` property
   */
  transition?: CSS.Property.Transition;
  /**
   * The CSS `transition-property` property
   */
  transitionProperty?: CSS.Property.TransitionProperty;
  /**
   * The CSS `transition-timing-function` property
   */
  transitionTimingFunction?: CSS.Property.TransitionTimingFunction;

  /**
   * The CSS `transition-duration` property
   */
  transitionDuration?: string;
}

export interface SafeAreaProps {
  safeArea?: boolean | number;
  safeAreaX?: boolean | number;
  safeAreaY?: boolean | number;
  safeAreaTop?: boolean | number;
  safeAreaBottom?: boolean | number;
  safeAreaLeft?: boolean | number;
  safeAreaRight?: boolean | number;
}
