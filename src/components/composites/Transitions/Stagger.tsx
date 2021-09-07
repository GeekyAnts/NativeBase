import cloneDeep from 'lodash.clonedeep';
import React from 'react';
import PresenceTransition from './PresenceTransition';
import type { ISupportedTransitions, ITransitionConfig } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

interface IStaggerConfig {
  offset: number;
  reverse?: boolean;
}

export interface IStaggerStyleProps extends ISupportedTransitions {
  transition?: ITransitionConfig & { stagger?: IStaggerConfig };
}

interface IStaggerProps {
  children: any;
  /**
   * Initial styles before the transition starts
   */
  initial?: ISupportedTransitions;
  /**
   * The styles to which each child should animate to while entering.
   */
  animate?: IStaggerStyleProps;
  /**
   * The styles to which each child should animate to while exiting.
   */
  exit?: IStaggerStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
}

const defaultStaggerConfig: IStaggerConfig = { offset: 0, reverse: false };

const Stagger = ({ children, ...restProps }: IStaggerProps) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(restProps)) {
    return null;
  }
  return React.Children.map(children, (child, index) => {
    const clonedAnimationConfig = cloneDeep(restProps);
    const { animate, exit } = clonedAnimationConfig;

    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      animate.transition.delay = animate.transition.delay + offset;
    }

    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      exit.transition.delay = exit.transition.delay + offset;
    }

    return (
      <PresenceTransition key={child.key} {...clonedAnimationConfig}>
        {child}
      </PresenceTransition>
    );
  });
};

export default Stagger;
