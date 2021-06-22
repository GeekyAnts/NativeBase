import { Config, system } from 'styled-system';

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

export const customBorder = system(config);
