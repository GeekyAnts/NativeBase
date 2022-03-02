import type { StyledProps } from '../../../theme/types';
import type { ViewProps } from 'react-native';
import type { PlatformProps } from '../../types';

export interface IInternalWrapperProps
  extends ViewProps,
    StyledProps,
    PlatformProps<IInternalWrapperProps> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}
