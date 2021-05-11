import { Config, system } from 'styled-system';

const config: Config = {
  w: {
    property: 'width',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  d: {
    property: 'display',
  },
  boxSizing: true,
};

export const customLayout = system(config);
