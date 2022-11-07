import type { InterfaceBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../../composites/IconButton';
import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types';
import type { IScrollViewProps } from '../../basic/ScrollView';
import type { IFadeProps, ISlideProps } from '../Transitions';
import type { ThemeComponentSizeType } from '../../../components/types/utils';
import type { IOverlayProps } from '../../primitives/Overlay';
export interface InterfaceModalProps extends InterfaceBoxProps<IModalProps> {
  /**
   * If true, the modal will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: any;
  /**
   * If true, the modal will be opened by default.
   */
  defaultIsOpen?: boolean;
  /**
   * The size of the modal.
   */
  size?: ThemeComponentSizeType<'Modal'>;
  /**
   * The ref of element to receive focus when the modal opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the modal closes.
   */
  finalFocusRef?: React.RefObject<any>;
  /**
   * If true and the keyboard is opened, the modal will move up equivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;
  /**
   * If true, the modal will close when the overlay is clicked.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * If true, the modal will close when Escape key is pressed.
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * If true, a backdrop element is visible.
   * @default true
   */
  overlayVisible?: boolean;
  /**
   * If true, a backdrop element is visible.
   * @default true
   */
  backdropVisible?: boolean;
  /**
   * Props applied on Overlay.
   */
  _backdrop?: any;
  /**
   * Sets the animation type.
   * @default "fade"
   */
  animationPreset?: 'fade' | 'slide';
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
   * Props to be passed to the Overlay used inside of Modal.
   */
  _overlay?: IOverlayProps;

  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
}

export type IModalComponentType = ((
  props: IModalProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (
      props: InterfaceBoxProps<IModalProps> & {
        _scrollview?: IScrollViewProps;
      } & {
        ref?: MutableRefObject<any>;
      }
    ) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: IIconButtonProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (
      props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (
      props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (
      props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};

export type IModalProps = InterfaceModalProps & CustomProps<'Modal'>;
