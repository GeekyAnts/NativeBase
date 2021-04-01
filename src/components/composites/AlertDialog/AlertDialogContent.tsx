import React from 'react';
import { Modal } from '../Modal';

const AlertDialogContent = React.forwardRef(function AlertDialogContent(
  props: any,
  ref?: any
) {
  return <Modal.Content accessibilityRole="alert" {...props} ref={ref} />;
});

export default AlertDialogContent;
