import React from 'react';
import { ModalContent } from '../Modal';
import type { IActionsheetContentProps } from './types';

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

export default React.memo(ActionsheetContent);
