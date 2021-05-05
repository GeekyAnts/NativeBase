import type * as CSS from 'csstype';
import { Config, system } from '../../styled-system/styled-system/src';

const config: Config = {
  shadow: {},
};

export interface customShadowProps {
  /**
   * The `box-shadow` property
   */
  shadow?: CSS.Property.BoxShadow | number;
}

export const customShadow = system(config);
