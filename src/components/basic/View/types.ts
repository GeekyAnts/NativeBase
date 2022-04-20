import type { StyledProps } from '../../../theme/types';
import type { ViewProps } from 'react-native';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceViewProps
  extends ViewProps,
    StyledProps,
    PlatformProps<IViewProps> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}

export type IViewProps = InterfaceViewProps & CustomProps<'View'>;
