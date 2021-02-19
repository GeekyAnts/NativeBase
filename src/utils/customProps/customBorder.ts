import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';
import type { ResponsiveValue } from './responsiveValue';

const config: Config = {
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
};

export interface customBorderProps {
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
export const customBorder = system(config);
