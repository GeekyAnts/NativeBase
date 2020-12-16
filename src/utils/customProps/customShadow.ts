import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
    defaultScale: ['#000', '#ffff'],
  },
};

export interface customShadowProps {
  /**
   * The `box-shadow` property
   */
  shadow?: CSS.Property.BoxShadow | number;
}

export const customShadow = system(config);
