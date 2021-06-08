import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';

export interface ExtraProps {}

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

export interface TransformProps {}

export interface TransitionProps {}

export interface SafeAreaProps {
  safeArea?: boolean | number;
  safeAreaX?: boolean | number;
  safeAreaY?: boolean | number;
  safeAreaTop?: boolean | number;
  safeAreaBottom?: boolean | number;
  safeAreaLeft?: boolean | number;
  safeAreaRight?: boolean | number;
}
