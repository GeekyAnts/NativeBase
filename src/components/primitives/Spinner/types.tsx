import type { ActivityIndicatorProps } from 'react-native';
import type { SpaceProps, LayoutProps, PositionProps } from '../../types';

export interface ISpinnerProps
  extends Omit<ActivityIndicatorProps, 'size'>,
    SpaceProps,
    LayoutProps,
    LayoutProps,
    PositionProps,
    PositionProps {
  /**
   * Style to be passed in ActivityIndicator
   */
  style?: any | undefined;
  /**
   * Size of Spinner
   */
  size?: 'sm' | 'lg' | 'small' | 'large' | number;
  /**
   * Accessibility label. This will be announced by screen reader when a user hovers or touches the spinner.
   */
  accessibilityLabel?: string;
  // variant?:
  //   | 'custom'
  //   | 'dotted'
  //   | 'multiColorDotted'
  //   | 'stroked'
  //   | 'squareDotted';
  // duration?: number;
  // renderProp?: JSX.Element | JSX.Element[];
}
