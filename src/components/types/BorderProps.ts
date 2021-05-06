import type * as CSS from 'csstype';
import type { ResponsiveValue } from './responsiveValue';
// TODO: More BorderProps exists
import type { BorderProps as ssBorderProps } from 'styled-system';

export interface BorderProps extends ssBorderProps {
  rounded?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  roundedTopLeft?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  roundedTopRight?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  borderTopLeftRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  borderTopRightRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  roundedBottomLeft?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  roundedBottomRight?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  borderBottomLeftRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  borderBottomRightRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  borderTopRadius?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  roundedTop?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  borderBottomRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  roundedBottom?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  borderLeftRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  roundedLeft?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
  borderRightRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<string | number>
  >;
  roundedRight?: ResponsiveValue<CSS.Property.BorderRadius<string | number>>;
}
