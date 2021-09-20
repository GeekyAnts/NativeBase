import type { MutableRefObject } from 'react';
import type { ResponsiveValue } from '../../../components/types';
import type { IColors } from '../../../theme/base/colors';
import type { IBoxProps, IIconProps } from '../../primitives';

export interface IAlertProps extends IBoxProps<IAlertProps> {
  /** The status of the alert
   *  @default info
   */
  status?: 'info' | 'warning' | 'success' | 'error' | string;
  /** The variant of the alert style to use.
   *  @default subtle
   */
  variant?:
    | 'subtle'
    | 'solid'
    | 'left-accent'
    | 'top-accent'
    | 'outline'
    | 'outline-light';
  /** The colorScheme of the Alert.
   */
  colorScheme?: string;
  /** The action to display. It renders after the message, at the end of the alert.
   */
  action?: JSX.Element;
  /** Props to be passed to the action Wrapper Box
   */
  actionProps?: IBoxProps<IAlertProps>;
}
export type IAlertContext = {
  status?: string;
  variant?: string;
  iconColor?: ResponsiveValue<IColors | (string & {})>;
  textColor?: ResponsiveValue<IColors | (string & {})>;
};

export interface IAlertIconProps extends IIconProps {
  /** Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: MutableRefObject<any>;
}

export type IAlertComponentType = ((
  props: IAlertProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Description: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IAlertIconProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Title: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
