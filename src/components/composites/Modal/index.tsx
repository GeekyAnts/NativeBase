import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalMain from './Modal';
export type { IModalProps, IModalSemiProps } from './types';
import type { IModalComponentType } from './types';

let ModalTemp: any = ModalMain;
ModalTemp.Content = ModalContent;
ModalTemp.CloseButton = ModalCloseButton;
ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;
ModalTemp.Body = ModalBody;

// To add typings
const Modal = ModalTemp as IModalComponentType;
export { Modal };
