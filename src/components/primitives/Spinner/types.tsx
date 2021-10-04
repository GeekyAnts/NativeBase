import type { ActivityIndicatorProps } from 'react-native';
import type { SpaceProps, LayoutProps, PositionProps } from '../../types';
import type { ResponsiveValue } from '../../../components/types';
export interface ISpinnerProps
  extends Omit<ActivityIndicatorProps, 'size'>,
    SpaceProps,
    LayoutProps,
    PositionProps {
  /**
   * Size of Spinner
   */
  size?: ResponsiveValue<'sm' | 'lg'>;

  // variant?:
  //   | 'custom'
  //   | 'dotted'
  //   | 'multiColorDotted'
  //   | 'stroked'
  //   | 'squareDotted';
  // duration?: number;
  // renderProp?: JSX.Element | JSX.Element[];
}
