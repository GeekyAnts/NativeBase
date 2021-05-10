import { Config, system } from 'styled-system';

const config: Config = {
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
    defaultScale: ['#000', '#ffff'],
  },
};

export const customShadow = system(config);
