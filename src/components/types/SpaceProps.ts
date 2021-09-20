import type { ISpacing } from '../../theme/base/space';
import type { ResponsiveValue } from './responsiveValue';

export interface SpaceProps {
  /** Margin on top, left, bottom and right */
  m?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on top, left, bottom and right */
  margin?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on top */
  mt?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on top */
  marginTop?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on right */
  mr?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on right */
  marginRight?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on bottom */
  mb?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on bottom */
  marginBottom?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on left */
  ml?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on left */
  marginLeft?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on left and right */
  mx?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on left and right */
  marginX?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on top and bottom */
  my?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Margin on top and bottom */
  marginY?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top, left, bottom and right */
  p?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top, left, bottom and right */
  padding?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top */
  pt?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top */
  paddingTop?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on right */
  pr?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on right */
  paddingRight?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on bottom */
  pb?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on bottom */
  paddingBottom?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on left */
  pl?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on left */
  paddingLeft?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on left and right */
  px?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on left and right */
  paddingX?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top and bottom */
  py?: ResponsiveValue<ISpacing | (string & {}) | number>;
  /** Padding on top and bottom */
  paddingY?: ResponsiveValue<ISpacing | (string & {}) | number>;
}
