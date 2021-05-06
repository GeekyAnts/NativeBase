import { Config, system } from 'styled-system';

const config: Config = {
  pos: {
    property: 'position',
  },
  inset: {
    properties: ['left', 'top', 'bottom', 'right'],
    scale: 'space',
  },
  insetX: {
    properties: ['left', 'right'],
    scale: 'space',
  },
  insetY: {
    properties: ['top', 'bottom'],
    scale: 'space',
  },
};

export const customPosition = system(config);
