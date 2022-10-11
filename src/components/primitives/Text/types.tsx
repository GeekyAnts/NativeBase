import type { TextProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type {
  IFont,
  IFontSize,
  IFontWeight,
  ILetterSpacing,
  ILineHeight,
} from '../../../theme/base/typography';
import type { CustomProps, PlatformProps, ResponsiveValue } from '../../types';

export interface InterfaceTextProps<T = ITextProps>
  extends PlatformProps<T>,
    StyledProps,
    TextProps {
  /**
   *  Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.
   */
  children?: React.ReactNode | string;
  /**
   * The size of font
   */

  fontSize?: ResponsiveValue<IFontSize | number | (string & {})>;

  /**
   * Letter spacing
   */

  letterSpacing?: ResponsiveValue<ILetterSpacing | number | (string & {})>;

  /**
   * Line height
   */

  lineHeight?: ResponsiveValue<ILineHeight | number | (string & {})>;
  /**
   * Font weight
   */

  fontWeight?: ResponsiveValue<IFontWeight | number | (string & {})>;
  /**
   * Fonts
   */

  font?: ResponsiveValue<IFont>;

  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: number;
  /**
   * Used to make the text bold.
   */
  bold?: boolean;
  /**
   * If true, it will render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
   */
  isTruncated?: boolean;
  /**
   * Used to make the text italic.
   */
  italic?: boolean;
  /**
   * Used to underline the text.
   */
  underline?: boolean;
  /**
   * A horizontal line through the center of the text.
   */
  strikeThrough?: boolean;
  /**
   * Text will have smaller font size.
   */
  sub?: boolean;
  /**
   * Used to highlight the text with a yellow background.
   */
  highlight?: boolean;
}

export type ITextProps = InterfaceTextProps & CustomProps<'Text'>;
