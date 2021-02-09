import React from 'react';
import { Modal } from '..';

const AlertDialogContent = React.forwardRef(function AlertDialogContent(
  props: any,
  ref
) {
  return <Modal.Content ref={ref} accessibilityRole="alert" {...props} />;
});

export default AlertDialogContent;
