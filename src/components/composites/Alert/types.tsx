import type { MutableRefObject } from 'react';
import type { IBoxProps, IIconProps } from '../../primitives';

export interface IAlertProps extends IBoxProps {
  /** The status of the alert
   *  @default info
   */
  status?: 'info' | 'warning' | 'success' | 'error' | (string & {});
  /** The variant of the alert style to use.
   *  @default subtle
   */
  variant?:
    | 'subtle'
    | 'solid'
    | 'left-accent'
    | 'top-accent'
    | 'outline'
    | 'outline-light'
    | (string & {});

  /** The colorScheme of the Alert.
   */
  colorScheme?: string;
  /** The action to display. It renders after the message, at the end of the alert.
   */
  // action?: JSX.Element;
  //remove
  /** Props to be passed to the action Wrapper Box
   */
  // actionProps?: IBoxProps;
}
export type IAlertContext = {
  status?: string;
  _icon?: IIconProps;
  variant?: string;
};

export interface IAlertIconProps extends IIconProps {}

export type IAlertComponentType = ((
  props: IAlertProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Icon: React.MemoExoticComponent<
    (props: IAlertIconProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
