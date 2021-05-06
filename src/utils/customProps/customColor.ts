import { Config, system } from 'styled-system';

const config: Config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
};

export const customColor = system(config);
