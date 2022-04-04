import type { IBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../IconButton';
import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types/utils';

export interface InterfaceAlertDialogProps extends IBoxProps {
  /**
   * If true, the AlertDialog will open. Useful for controllable state behaviour
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the AlertDialog is closed
   */
  onClose?: () => any;
  /**
   * If true, the AlertDialog will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * The size of the AlertDialog
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | number | string;
  /**
   * The ref of element that is least destructive child of the AlertDialog.
   */
  leastDestructiveRef: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the AlertDialog opens.
   */
  initialFocusRef?: React.RefObject<any> | any;
  /**
   * The ref of element to receive focus when the AlertDialog closes.
   */
  finalFocusRef?: React.RefObject<any> | any;
  /**
   * If true and the keyboard is opened, the AlertDialog will move up equvivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;
  /**
   * If true, the AlertDialog will close when the overlay is clicked
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * If true, the AlertDialog will close when Escape key is pressed
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * If true, a backdrop element is visible
   * @default true
   */
  overlayVisible?: boolean;
  /**
   * If true, a backdrop element is visible
   * @default true
   */
  backdropVisible?: boolean;
  /**
   * Props applied on Overlay.
   */
  _backdrop?: any;
}

export type IAlertDialogComponentType = ((
  props: IAlertDialogProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: IIconButtonProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

export type IAlertDialogProps = InterfaceAlertDialogProps &
  CustomProps<'AlertDialog'>;
