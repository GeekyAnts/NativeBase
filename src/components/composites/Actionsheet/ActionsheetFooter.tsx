import React from 'react';
import { ModalContent } from '../Modal';
import type { IActionsheetFooterProps } from './props';

const ActionsheetFooter = ({ children, ...props }: IActionsheetFooterProps) => {
  return (
    <ModalContent m={3} p={2} mb={6} borderRadius="lg" {...props}>
      {children}
    </ModalContent>
  );
};

export default ActionsheetFooter;
