import { Config, system } from 'styled-system';

const config: Config = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: {
    property: 'listStylePosition',
  },
  listStyleImage: true,
  listStyleImg: {
    property: 'listStyleImage',
  },
};

export const customList = system(config);
