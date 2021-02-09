import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Context';
const ModalBody = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalBodyProps} {...props} />;
};

export default React.memo(ModalBody);
