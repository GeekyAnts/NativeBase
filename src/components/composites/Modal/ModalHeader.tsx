import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalHeader = (props: IBoxProps, ref?: any) => {
  const newProps = useThemeProps('ModalHeader', props);
  return <Box {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ModalHeader));
