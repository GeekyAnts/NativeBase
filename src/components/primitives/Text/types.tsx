import type { TextProps } from 'react-native';
import type { ITheme } from '../../../theme/base';
import type {
  BorderProps,
  ColorProps,
  BackgroundColorProps,
  PlatformProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  RequiredTheme,
} from '../../types/theme';

export interface ITextProps<T extends ITheme = RequiredTheme>
  extends TextProps,
    Omit<ColorProps<T>, 'fill' | 'stroke'>,
    SpaceProps<T>,
    BorderProps<T>,
    BackgroundColorProps<T>,
    PositionProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TypographyProps<T>,
    PlatformProps,
    FlexboxProps {
  /**
   *  Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.
   */
  children?: React.ReactNode | string;
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
