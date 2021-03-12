import AlertDialogMain, { IAlertDialogComponentType } from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
export type { IAlertDialogProps } from './AlertDialog';
import { Modal } from '../../composites/Modal';

let AlertDialogTemp: any = AlertDialogMain;
AlertDialogTemp.Content = AlertDialogContent;
AlertDialogTemp.CloseButton = Modal.CloseButton;
AlertDialogTemp.Header = Modal.Header;
AlertDialogTemp.Footer = Modal.Footer;
AlertDialogTemp.Body = Modal.Body;

// To add typings
const AlertDialog = AlertDialogTemp as IAlertDialogComponentType;
export { AlertDialog };
