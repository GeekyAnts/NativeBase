import React from 'react';
import { Modal } from '../../composites';
import type { IActionsheetFooterProps } from './types';

const ActionsheetFooter = ({ children, ...props }: IActionsheetFooterProps) => {
  return (
    <Modal.Content m={3} p={2} mb={6} borderRadius="lg" {...props}>
      {children}
    </Modal.Content>
  );
};

export default React.memo(ActionsheetFooter);
