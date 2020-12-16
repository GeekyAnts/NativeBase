import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

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

export interface customTransitionProps {
  /**
   * The CSS `transition` property
   */
  transition?: CSS.Property.Transition;
  /**
   * The CSS `transition-property` property
   */
  transitionProperty?: CSS.Property.TransitionProperty;
  /**
   * The CSS `transition-timing-function` property
   */
  transitionTimingFunction?: CSS.Property.TransitionTimingFunction;

  /**
   * The CSS `transition-duration` property
   */
  transitionDuration?: string;
}

export const customTransition = system(config);
