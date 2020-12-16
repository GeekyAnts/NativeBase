import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
};

export interface customColorProps {
  /**
   * The CSS `color` property
   */
  textColor?: CSS.Property.Color;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSS.Property.Color;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSS.Property.Color;
}

export const customColor = system(config);
