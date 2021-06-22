import { Config, system } from 'styled-system';

const config: Config = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  willChange: true,
};

export const customExtra = system(config);
