import type { TextProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  BackgroundProps,
  OutlineProps,
  ExtraProps,
  PlatformProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from '../../types';

export interface ITextProps
  extends Omit<ColorProps, 'fill' | 'stroke'>,
    SpaceProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    LayoutProps,
    OutlineProps,
    ExtraProps,
    PlatformProps,
    ShadowProps,
    FlexboxProps,
    TypographyProps,
    TextProps {
  /**
   *  Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.
   */
  children?: React.ReactNode | string;
  /**
   * The size of font
   */
  fontSize?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | number
    | Array<number>
    | Array<string>
    | Record<string, string>;
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: number;
  /**
   * Make the text bold.
   */
  bold?: boolean;
  /**
   * If true, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
   */
  isTruncated?: boolean;
  /**
   * Make the text italic.
   */
  italic?: boolean;
  /**
   * Underline the text.
   */
  underline?: boolean;
  /**
   * A horizontal line through its center.
   */
  strikeThrough?: boolean;
  /**
   * Text will have smaller font size.
   */
  sub?: boolean;
  /**
   * Highlight the text with a yellow background.
   */
  highlight?: boolean;
}
