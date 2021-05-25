import type { IBoxProps, IIconProps } from '../../primitives';

export interface IAlertProps extends IBoxProps {
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
  actionProps?: IBoxProps;
}
export type IAlertContext = {
  status?: string;
  variant?: string;
  iconColor?: string;
  textColor?: string;
};

export interface IAlertIconProps extends IIconProps {
  /** Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
}

export type IAlertComponentType = ((
  props: IAlertProps & { ref?: any }
) => JSX.Element) & {
  Description: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IAlertIconProps & { ref?: any }) => JSX.Element
  >;
  Title: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};
