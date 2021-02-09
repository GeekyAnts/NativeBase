import React from 'react';
import { Modal } from '../../composites';
import type { IActionsheetContentProps } from './types';

const ActionsheetContent = ({
  children,
  ...props
}: IActionsheetContentProps) => {
  return (
    <Modal.Content m={3} p={2} mb={1} borderRadius="lg" {...props}>
      {children}
    </Modal.Content>
  );
};

export default React.memo(ActionsheetContent);
