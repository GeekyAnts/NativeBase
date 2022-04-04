import type { KeyboardAvoidingViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceKeyboardAvoidingViewProps
  extends KeyboardAvoidingViewProps,
    StyledProps,
    PlatformProps<IKeyboardAvoidingViewProps> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}

export type IKeyboardAvoidingViewProps = InterfaceKeyboardAvoidingViewProps &
  CustomProps<'KeyboardAvoidingView'>;
