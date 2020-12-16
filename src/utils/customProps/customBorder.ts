import { Config, system } from 'styled-system';
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
  rounded?: ResponsiveValue<string | number>;
  roundedTopLeft?: ResponsiveValue<string | number>;
  roundedTopRight?: ResponsiveValue<string | number>;
  borderTopLeftRadius?: ResponsiveValue<string | number>;
  borderTopRightRadius?: ResponsiveValue<string | number>;
  roundedBottomLeft?: ResponsiveValue<string | number>;
  roundedBottomRight?: ResponsiveValue<string | number>;
  borderBottomLeftRadius?: ResponsiveValue<string | number>;
  borderBottomRightRadius?: ResponsiveValue<string | number>;
  borderTopRadius?: ResponsiveValue<string | number>;
  roundedTop?: ResponsiveValue<string | number>;
  borderBottomRadius?: ResponsiveValue<string | number>;
  roundedBottom?: ResponsiveValue<string | number>;
  borderLeftRadius?: ResponsiveValue<string | number>;
  roundedLeft?: ResponsiveValue<string | number>;
  borderRightRadius?: ResponsiveValue<string | number>;
  roundedRight?: ResponsiveValue<string | number>;
}
export const customBorder = system(config);
