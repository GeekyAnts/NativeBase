import { Config, system } from 'styled-system';

const config: Config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
  },
  right: {
    property: 'right',
    scale: 'space',
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
  },
  left: {
    property: 'left',
    scale: 'space',
  },
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
