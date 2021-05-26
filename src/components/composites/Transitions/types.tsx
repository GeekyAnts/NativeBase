import type { ViewProps } from 'react-native';
import type { IBoxProps } from '../../primitives';

export type IFadeProps = IBoxProps & {
  in?: boolean;
  entryDuration?: number;
  exitDuration?: number;
  delay?: number;
};
export type IScaleFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  initialScale?: number;
};
export type ISlideProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  placement?: 'top' | 'bottom';
};
export type ISlideFadeProps = IBoxProps & {
  in?: boolean;
  delay?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
};

export interface ISupportedTransitions {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: string;
}

export interface ITransitionConfig {
  type?: 'timing' | 'spring';
  easing?: (value: number) => number;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number | { x: number; y: number };
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  mass?: number;
  damping?: number;
  delay?: number;
  duration?: number;
  useNativeDriver?: boolean;
}

export interface ITransitionStyleProps extends ISupportedTransitions {
  transition?: ITransitionConfig;
}
export interface ITransitionProps extends ViewProps {
  /**
   * Callback invoked when transition is completed
   */
  onTransitionComplete?: (s: 'entered' | 'exited') => any;
  /**
   * Styles before the transition starts
   */
  initial?: ISupportedTransitions;
  /**
   * Entry animation styles
   */
  animate?: ITransitionStyleProps;
  /**
   * Exit animation styles
   */
  exit?: ITransitionStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
  children?: any;
  as?: any;
}

export interface IPresenceTransitionProps extends ViewProps {
  /**
   * Callback invoked when transition is completed
   */
  onTransitionComplete?: (s: 'entered' | 'exited') => any;
  /**
   * Styles before the transition starts
   */
  initial?: ISupportedTransitions;
  /**
   * Entry animation styles
   */
  animate?: ITransitionStyleProps;
  /**
   * Exit animation styles
   */
  exit?: ITransitionStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
  children?: any;
  /**
   * Accepts a Component to be rendered as Wrapper. Defaults to `View`
   */
  as?: any;
}
