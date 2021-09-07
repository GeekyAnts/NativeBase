import type { ActivityIndicatorProps } from 'react-native';
import type { SpaceProps, LayoutProps, PositionProps } from '../../types';

export interface ISpinnerProps
  extends Omit<ActivityIndicatorProps, 'size'>,
    SpaceProps,
    LayoutProps,
    PositionProps {
  /**
   * Size of Spinner
   */
  size?: 'sm' | 'lg' | 'small' | 'large' | number;
  // variant?:
  //   | 'custom'
  //   | 'dotted'
  //   | 'multiColorDotted'
  //   | 'stroked'
  //   | 'squareDotted';
  // duration?: number;
  // renderProp?: JSX.Element | JSX.Element[];
}
