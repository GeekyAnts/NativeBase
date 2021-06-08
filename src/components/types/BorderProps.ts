import type { ResponsiveValue } from './responsiveValue';
// TODO: More BorderProps exists
import type { BorderProps as ssBorderProps } from './theme';
import type { IThemeColors } from '../../theme/base/colors';
import type { IThemeRadii } from '../../theme/base/radius';

export interface BorderProps extends ssBorderProps {
  // Border Radius
  rounded?: ResponsiveValue<IThemeRadii>;
  roundedTopLeft?: ResponsiveValue<IThemeRadii>;
  roundedTopRight?: ResponsiveValue<IThemeRadii>;
  borderTopLeftRadius?: ResponsiveValue<IThemeRadii>;
  borderTopRightRadius?: ResponsiveValue<IThemeRadii>;
  roundedBottomLeft?: ResponsiveValue<IThemeRadii>;
  roundedBottomRight?: ResponsiveValue<IThemeRadii>;
  borderRadius?: ResponsiveValue<IThemeRadii>;
  borderBottomLeftRadius?: ResponsiveValue<IThemeRadii>;
  borderBottomRightRadius?: ResponsiveValue<IThemeRadii>;
  borderTopRadius?: ResponsiveValue<IThemeRadii>;
  roundedTop?: ResponsiveValue<IThemeRadii>;
  borderBottomRadius?: ResponsiveValue<IThemeRadii>;
  roundedBottom?: ResponsiveValue<IThemeRadii>;
  borderLeftRadius?: ResponsiveValue<IThemeRadii>;
  roundedLeft?: ResponsiveValue<IThemeRadii>;
  borderRightRadius?: ResponsiveValue<IThemeRadii>;
  roundedRight?: ResponsiveValue<IThemeRadii>;

  // Border Colors
  borderColor?: ResponsiveValue<IThemeColors>;
  borderTopColor?: ResponsiveValue<IThemeColors>;
  borderBottomColor?: ResponsiveValue<IThemeColors>;
  borderLeftColor?: ResponsiveValue<IThemeColors>;
  borderRightColor?: ResponsiveValue<IThemeColors>;
}
