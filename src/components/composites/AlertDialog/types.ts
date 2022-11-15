import type { IBoxProps, InterfaceBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../IconButton';
import type { MutableRefObject } from 'react';
import type { IFadeProps, ISlideProps } from '../Transitions';
import type {
  CustomProps,
  ThemeComponentSizeType,
} from '../../../components/types/utils';

export interface InterfaceAlertDialogProps
  extends InterfaceBoxProps<IAlertDialogProps> {
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
  size?: ThemeComponentSizeType<'AlertDialog'>; //'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | number | string;
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
   * If true and the keyboard is opened, the AlertDialog will move up equivalent to the keyboard height.
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
  /**
   * Props applied on Overlay Animation.
   */
  _backdropFade?: Partial<IFadeProps>;
  /**
   * Props applied on Child Fade Animation.
   */
  _fade?: Partial<IFadeProps>;
  /**
   * Props applied on Child Slide Animation.
   */
  _slide?: Partial<ISlideProps>;
  /**
   * Sets the animation type
   * @default "fade"
   */
  animationPreset?: 'slide' | 'fade';
  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
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
