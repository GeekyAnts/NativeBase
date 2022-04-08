import type { ActivityIndicatorProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
export interface InterfaceSpinnerProps
  extends Omit<ActivityIndicatorProps, 'size'>,
    Omit<StyledProps, 'size' | 'color'> {
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

export type ISpinnerProps = InterfaceSpinnerProps & CustomProps<'Spinner'>;
