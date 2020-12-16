import React from 'react';
import { ModalContent } from '../Modal';
import type { IActionsheetContentProps } from './props';

const ActionsheetContent = ({
  children,
  ...props
}: IActionsheetContentProps) => {
  return (
    <ModalContent m={3} p={2} mb={1} borderRadius="lg" {...props}>
      {children}
    </ModalContent>
  );
};

export default ActionsheetContent;
