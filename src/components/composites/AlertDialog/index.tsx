import React from 'react';
import Modal, {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  IModalProps,
} from './../Modal';

export interface IAlertDialogProps
  extends Omit<IModalProps, 'initialFocusRef'> {
  leastDestructiveRef: IModalProps['initialFocusRef'];
}

const AlertDialog = React.memo((props: IAlertDialogProps) => {
  const { leastDestructiveRef, ...rest } = props;
  return (
    <Modal
      {...rest}
      initialFocusRef={leastDestructiveRef}
      closeOnOverlayClick={false}
    />
  );
});
const AlertDialogContent = React.forwardRef(function AlertDialogContent(
  props: any,
  ref
) {
  return <ModalContent ref={ref} accessibilityRole="alert" {...props} />;
});

export {
  AlertDialog,
  AlertDialogContent,
  ModalBody as AlertDialogBody,
  ModalCloseButton as AlertDialogCloseButton,
  ModalFooter as AlertDialogFooter,
  ModalHeader as AlertDialogHeader,
  ModalOverlay as AlertDialogOverlay,
};
