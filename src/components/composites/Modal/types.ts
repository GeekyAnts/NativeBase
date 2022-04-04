import type { InterfaceBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../../composites/IconButton';
import type { MutableRefObject } from 'react';

import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { IScrollViewProps } from '../../basic/ScrollView';

export interface InterfaceModalProps extends InterfaceBoxProps<IModalProps> {
  /**
   * If true, the modal will open. Useful for controllable state behaviour
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed
   */
  onClose?: any;
  /**
   * If true, the modal will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * The size of the modal
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   * The ref of element to receive focus when the modal opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the modal closes.
   */
  finalFocusRef?: React.RefObject<any>;
  /**
   * If true and the keyboard is opened, the modal will move up equvivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;
  /**
   * If true, the modal will close when the overlay is clicked
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * If true, the modal will close when Escape key is pressed
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
   * Sets the animation type
   * @default "fade"
   */
  animationPreset?: 'fade' | 'slide';
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
