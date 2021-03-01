import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalBody = (props: IBoxProps) => {
  // const { newProps } = React.useContext(ModalContext);
  const newProps = useThemeProps('ModalBody', props);
  return <Box {...newProps} />;
};

export default React.memo(ModalBody);
