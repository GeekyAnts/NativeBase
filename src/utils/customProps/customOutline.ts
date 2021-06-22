import { Config, system } from 'styled-system';

/**
 * The parser configuration for common outline properties
 */
const config: Config = {
  outline: true,
  outlineOffset: true,
  outlineWidth: true,
  outlineStyle: true,
  outlineColor: {
    property: 'outlineColor',
    scale: 'colors',
  },
};

export const customOutline = system(config);
