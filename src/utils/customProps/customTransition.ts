import { Config, system } from 'styled-system';

const config: Config = {
  transition: true,
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transition.duration',
  },
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transition.property',
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction',
    scale: 'transition.timingFunction',
  },
};

export const customTransition = system(config);
