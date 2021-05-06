import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';
import type { ResponsiveValue } from '../../components/types/responsiveValue';

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
