import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalHeader = (props: IBoxProps) => {
  const newProps = useThemeProps('ModalHeader', props);
  return <Box {...newProps} />;
};

export default React.memo(ModalHeader);
