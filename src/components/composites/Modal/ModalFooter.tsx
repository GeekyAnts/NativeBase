import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalFooter = (props: IBoxProps, ref?: any) => {
  const newProps = useThemeProps('ModalFooter', props);
  return <Box {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ModalFooter));
