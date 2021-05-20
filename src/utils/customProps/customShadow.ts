import { Config, system } from 'styled-system';

const config: Config = {
  shadow: {
    property: 'shadow',
    scale: 'shadows',
    defaultScale: ['#000', '#ffff'],
  },
};

export const customShadow = system(config);
