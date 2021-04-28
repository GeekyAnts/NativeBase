import Modal, { IModalProps } from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import type { IIconButtonProps } from '../../composites/IconButton';
import type { IBoxProps } from '../../primitives/Box';

let ModalMain: any = Modal;

ModalMain.Content = ModalContent;
ModalMain.CloseButton = ModalCloseButton;
ModalMain.Header = ModalHeader;
ModalMain.Footer = ModalFooter;
ModalMain.Body = ModalBody;

export type IModalComponentType = ((
  props: IModalProps & { ref?: any }
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: Omit<IIconButtonProps, 'icon'> & { ref?: any }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};

export { Modal, IModalProps };
