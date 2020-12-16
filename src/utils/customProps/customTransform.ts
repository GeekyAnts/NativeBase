import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  transform: true,
  transformOrigin: true,
};

export interface customTransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: CSS.Property.Transform;
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: CSS.Property.TransformOrigin;
}

export const customTransform = system(config);
