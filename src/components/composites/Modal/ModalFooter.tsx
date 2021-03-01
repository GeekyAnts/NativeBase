import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalFooter = (props: IBoxProps) => {
  const newProps = useThemeProps('ModalFooter', props);
  return <Box {...newProps} />;
};

export default React.memo(ModalFooter);
