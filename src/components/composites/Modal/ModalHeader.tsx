import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Context';
const ModalHeader = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalHeaderProps} {...props} />;
};

export default React.memo(ModalHeader);
