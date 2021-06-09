import type * as CSS from 'csstype';

import type { ITheme as Theme } from '../../theme/base';
import type { TextStyle } from 'react-native';

type IColors<ThemeType extends Theme> = Pick<ThemeType, 'colors'>['colors'];

type InnerColor<Type, Property extends string | number> = Type extends object
  ? `${Property}.${(string | number) & keyof Type}`
  : Property;

type AllColors<ThemeType extends Theme> = {
  [Property in keyof IColors<ThemeType> as InnerColor<
    IColors<ThemeType>[Property],
    string & Property
  >]: IColors<ThemeType>[Property];
};

export type IThemeColors<ThemeType extends Theme> =
  | keyof AllColors<ThemeType>
  | string;

export type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;

export type Scale = ObjectOrArray<number | string>;

export type TLengthStyledSystem = string | 0 | number;

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | Array<T | null>
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type ThemeValue<
  K extends keyof ThemeType,
  ThemeType,
  TVal = any
> = ThemeType[K] extends TVal[]
  ? number
  : ThemeType[K] extends Record<infer E, TVal>
  ? E
  : ThemeType[K] extends ObjectOrArray<infer F>
  ? F
  : never;

export interface SpaceProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType> | any
> {
  /** Margin on top, left, bottom and right */
  m?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top, left, bottom and right */
  margin?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top */
  mt?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top */
  marginTop?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on right */
  mr?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on right */
  marginRight?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on bottom */
  mb?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on bottom */
  marginBottom?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left */
  ml?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left */
  marginLeft?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left and right */
  mx?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on left and right */
  marginX?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top and bottom */
  my?: ResponsiveValue<TVal, ThemeType>;
  /** Margin on top and bottom */
  marginY?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top, left, bottom and right */
  p?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top, left, bottom and right */
  padding?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top */
  pt?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top */
  paddingTop?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on right */
  pr?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on right */
  paddingRight?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on bottom */
  pb?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on bottom */
  paddingBottom?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left */
  pl?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left */
  paddingLeft?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left and right */
  px?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on left and right */
  paddingX?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top and bottom */
  py?: ResponsiveValue<TVal, ThemeType>;
  /** Padding on top and bottom */
  paddingY?: ResponsiveValue<TVal, ThemeType>;
}

/**
 * Color
 */

export interface TextColorProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  color?: ResponsiveValue<IThemeColors<ThemeType>>;
}

export interface BackgroundColorProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bg?: ResponsiveValue<IThemeColors<ThemeType>>;
  backgroundColor?: ResponsiveValue<IThemeColors<ThemeType>>;
  bgColor?: ResponsiveValue<IThemeColors<ThemeType>>;
}

export interface ColorProps<ThemeType extends Theme = RequiredTheme>
  extends TextColorProps<ThemeType>,
    BackgroundColorProps<ThemeType>,
    OpacityProps {}

/**
 * Typography
 */

export interface FontSizeProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'fontSizes', ThemeType> | string | number
> {
  /**
   * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
   *
   * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
   * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
   * - String values are passed as raw CSS values.
   * - And array values are converted into responsive values.
   *
   */
  fontSize?: ResponsiveValue<TVal, ThemeType>;
}

export interface FontFamilyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<string, ThemeType>;
}

export interface FontWeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'fontWeights', ThemeType>
> {
  /**
   * The font-weight CSS property specifies the weight (or boldness) of the font.
   *
   * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   */
  fontWeight?: ResponsiveValue<TVal | number, ThemeType>;
}

export interface LineHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'lineHeights', ThemeType> | number
> {
  /**
   * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
   * it specifies the minimum height of line boxes within the element.
   *
   * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   */
  lineHeight?: ResponsiveValue<TVal, ThemeType>;
}

export interface TextAlignProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  textAlign?: ResponsiveValue<CSS.Property.TextAlign, ThemeType>;
}

export interface FontStyleProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The font-style CSS property specifies whether a font should be styled with a normal, italic,
   * or oblique face from its font-family.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   */
  fontStyle?: ResponsiveValue<CSS.Property.FontStyle, ThemeType>;
}

export interface LetterSpacingProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'letterSpacings', ThemeType> | number
> {
  /**
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   */
  letterSpacing?: ResponsiveValue<TVal, ThemeType>;
}

/**
 * A convenience style group containing props related to typography such as fontFamily, fontSize, fontWeight, etc.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface TypographyProps<ThemeType extends Theme = RequiredTheme>
  extends FontFamilyProps<ThemeType>,
    FontSizeProps<ThemeType>,
    FontWeightProps<ThemeType>,
    LineHeightProps<ThemeType>,
    LetterSpacingProps<ThemeType>,
    FontStyleProps<ThemeType>,
    TextAlignProps<ThemeType> {
  textTransform?: ResponsiveValue<
    Pick<TextStyle, 'textTransform'>['textTransform']
  >;

  textDecorationColor?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationColor'>['textDecorationColor']
  >;

  textDecorationStyle?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationStyle'>['textDecorationStyle']
  >;

  textDecorationLine?: ResponsiveValue<
    Pick<TextStyle, 'textDecorationLine'>['textDecorationLine'] | string
  >;
}

/**
 * Layout
 */

export interface WidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Width<TLengthStyledSystem>
> {
  /**
   *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width styles.
   */
  width?: ResponsiveValue<TVal, ThemeType>;
}

export interface MaxWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.MaxWidth<TLengthStyledSystem>
> {
  /**
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   */
  maxWidth?: ResponsiveValue<TVal, ThemeType>;
}

export interface MinWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.MinWidth<TLengthStyledSystem>
> {
  /**
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   */
  minWidth?: ResponsiveValue<TVal, ThemeType>;
}

export interface HeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Height<TLengthStyledSystem>
> {
  /**
   * The height CSS property specifies the height of an element. By default, the property defines the height of the
   * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   */
  height?: ResponsiveValue<TVal, ThemeType>;
}

export interface MaxHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.MaxHeight<TLengthStyledSystem>
> {
  /**
   * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
   * property from becoming larger than the value specified for max-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   */
  maxHeight?: ResponsiveValue<TVal, ThemeType>;
}

export interface MinHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.MinHeight<TLengthStyledSystem>
> {
  /**
   * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
   * property from becoming smaller than the value specified for min-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  minHeight?: ResponsiveValue<TVal, ThemeType>;
}

export interface SizeProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'sizes', ThemeType> | number | string
> {
  size?: ResponsiveValue<TVal | number, ThemeType>;
}

/**
 * Flexbox
 */
export interface AlignItemsProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
   * property sets the alignment of an item within its containing block.
   *
   * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
   * of items on the Block Axis within their grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   */
  alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType>;
}

export interface AlignContentProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS align-content property sets how the browser distributes space between and around content items
   * along the cross-axis of a flexbox container, and the main-axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   */
  alignContent?: ResponsiveValue<CSS.Property.AlignContent, ThemeType>;
}

export interface JustifyItemsProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
   * a default way of justifying each box along the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   */
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems, ThemeType>;
}

export interface JustifyContentProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content items
   * along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType>;
}

export interface FlexWrapProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   * If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   */
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap, ThemeType>;
}

export interface FlexBasisProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.FlexBasis<TLengthStyledSystem>
> {
  // TODO: The FlexBasisValue currently really only exists for documentation
  //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
  //       Not sure there’s a way to still have the union values show up as
  //       auto-completion results.
  flexBasis?: ResponsiveValue<TVal, ThemeType>;
}

export interface FlexDirectionProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
   * axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   */
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
}

export interface FlexProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Flex<TLengthStyledSystem>
> {
  /**
   * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
   * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   */
  flex?: ResponsiveValue<TVal, ThemeType>;
}

export interface JustifySelfProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS justify-self property set the way a box is justified inside its alignment container along
   * the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
   */
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf, ThemeType>;
}

export interface AlignSelfProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
   *
   * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
   * aligns the item inside the grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   */
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf, ThemeType>;
}

export interface OrderProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
   * are sorted by ascending order value and then by their source code order.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
   */
  order?: ResponsiveValue<CSS.Property.Order, ThemeType>;
}

export interface FlexGrowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
   * remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
   */
  flexGrow?: ResponsiveValue<CSS.Property.FlexGrow, ThemeType>;
}

export interface FlexShrinkProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
   * than the flex container, items shrink to fit according to flex-shrink.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
   */
  flexShrink?: ResponsiveValue<CSS.Property.FlexShrink, ThemeType>;
}

/**
 * A convenience style group containing props related to flexbox.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface FlexboxProps<ThemeType extends Theme = RequiredTheme>
  extends AlignItemsProps<ThemeType>,
    AlignContentProps<ThemeType>,
    JustifyItemsProps<ThemeType>,
    JustifyContentProps<ThemeType>,
    FlexWrapProps<ThemeType>,
    FlexDirectionProps<ThemeType>,
    FlexProps<ThemeType>,
    FlexGrowProps<ThemeType>,
    FlexShrinkProps<ThemeType>,
    FlexBasisProps<ThemeType>,
    JustifySelfProps<ThemeType>,
    AlignSelfProps<ThemeType>,
    OrderProps<ThemeType> {
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection>;
}

/**
 * A convenience style group containing props related to layout such as width, height, and display.
 *
 * - For length props, Numbers from 0-4 (or the length of theme.sizes) are converted to values on the spacing scale.
 * - For length props, Numbers greater than the length of the theme.sizes array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface LayoutProps<ThemeType extends Theme = RequiredTheme>
  extends WidthProps<ThemeType>,
    HeightProps<ThemeType>,
    MinWidthProps<ThemeType>,
    MinHeightProps<ThemeType>,
    MaxWidthProps<ThemeType>,
    MaxHeightProps<ThemeType>,
    SizeProps<ThemeType> {
  /**
   * The CSS `width` property
   */
  w?: ResponsiveValue<CSS.Property.Width<string | number>>;
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
}

/**
 * Borders
 */

export interface BorderWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = number
> {
  /**
   * The border-width shorthand CSS property sets the width of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
   */
  borderWidth?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-top-width CSS property sets the width of the top border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
   */
  borderTopWidth?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-bottom-width CSS property sets the width of the bottom border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
   */
  borderBottomWidth?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-left-width CSS property sets the width of the left border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   */
  borderLeftWidth?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-right-width CSS property sets the width of the right border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   */
  borderRightWidth?: ResponsiveValue<TVal, ThemeType>;
}

export interface BorderStyleProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The border-style shorthand CSS property sets the style of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
   */
  borderStyle?: ResponsiveValue<CSS.Property.BorderStyle, ThemeType>;
  /**
   * The border-top-style CSS property sets the line style of an element's top border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
   */
  borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle, ThemeType>;
  /**
   * The border-bottom-style CSS property sets the line style of an element's bottom border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
   */
  borderBottomStyle?: ResponsiveValue<
    CSS.Property.BorderBottomStyle,
    ThemeType
  >;
  /**
   * The border-left-style CSS property sets the line style of an element's left border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   */
  borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle, ThemeType>;
  /**
   * The border-right-style CSS property sets the line style of an element's right border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   */
  borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle, ThemeType>;
}

export interface BorderColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = IThemeColors<ThemeType> | string
> {
  /**
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   */
  borderColor?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   */
  borderTopColor?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   */
  borderBottomColor?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   */
  borderLeftColor?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   */
  borderRightColor?: ResponsiveValue<TVal, ThemeType>;
}

export interface BorderRadiusProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'radii', ThemeType> | number
> {
  rounded?: ResponsiveValue<TVal, ThemeType>;
  roundedTopLeft?: ResponsiveValue<TVal, ThemeType>;
  roundedTopRight?: ResponsiveValue<TVal, ThemeType>;

  roundedBottomLeft?: ResponsiveValue<TVal, ThemeType>;
  roundedBottomRight?: ResponsiveValue<TVal, ThemeType>;

  roundedTop?: ResponsiveValue<TVal, ThemeType>;

  roundedBottom?: ResponsiveValue<TVal, ThemeType>;

  roundedLeft?: ResponsiveValue<TVal, ThemeType>;

  roundedRight?: ResponsiveValue<TVal, ThemeType>;

  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   */
  borderRadius?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   */
  borderTopLeftRadius?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   */
  borderTopRightRadius?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   */
  borderBottomLeftRadius?: ResponsiveValue<TVal, ThemeType>;
  /**
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   */
  borderBottomRightRadius?: ResponsiveValue<TVal, ThemeType>;
}

export interface BordersProps<ThemeType extends Theme = RequiredTheme>
  extends BorderProps<ThemeType>,
    BorderWidthProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderRadiusProps<ThemeType> {}

export interface BorderProps<ThemeType extends Theme = RequiredTheme>
  extends BorderWidthProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderRadiusProps<ThemeType> {}

export interface OpacityProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType>;
}

/**
 * Position
 */

export interface ZIndexProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<CSS.Property.ZIndex, ThemeType>;
}

export interface TopProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Top<TLengthStyledSystem>
> {
  /**
   * The top CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  top?: ResponsiveValue<TVal, ThemeType>;
}

export interface RightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Right<TLengthStyledSystem>
> {
  /**
   * The right CSS property participates in specifying the horizontal position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
   */
  right?: ResponsiveValue<TVal, ThemeType>;
}

export interface BottomProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Bottom<TLengthStyledSystem>
> {
  /**
   * The bottom CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  bottom?: ResponsiveValue<TVal, ThemeType>;
}

export interface LeftProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Left<TLengthStyledSystem>
> {
  /**
   * The left CSS property participates in specifying the horizontal position
   * of a positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
   */
  left?: ResponsiveValue<TVal, ThemeType>;
}

export interface PositionProps<ThemeType extends Theme = RequiredTheme>
  extends ZIndexProps<ThemeType>,
    TopProps<ThemeType>,
    RightProps<ThemeType>,
    BottomProps<ThemeType>,
    LeftProps<ThemeType> {
  /**
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   */
  position?: ResponsiveValue<CSS.Property.Position, ThemeType>;
}

export interface PlatformProps {
  /**
   * Props only for web
   */
  _web?: any;
  /**
   * Props only for ios
   */
  _ios?: any;
  /**
   * Props only for android
   */
  _android?: any;
}

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The `box-shadow` property
   */
  //@ts-ignore
  shadow?: ThemeValue<'shadows', ThemeType>;
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
