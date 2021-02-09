import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { ModalContext } from './Context';
const ModalFooter = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalFooterProps} {...props} />;
};

export default React.memo(ModalFooter);
