import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  transform: true,
  transformOrigin: true,
};

export const customTransform = system(config);
