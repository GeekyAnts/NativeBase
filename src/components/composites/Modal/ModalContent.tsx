import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Modal';
const ModalContent = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return (
    <Box
      {...newProps.modalContentProps}
      width={newProps._width || newProps.size || '75%'}
      {...props}
    />
  );
};

export default React.memo(ModalContent);
