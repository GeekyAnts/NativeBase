import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const ModalBody = (props: IBoxProps, ref?: any) => {
  // const { newProps } = React.useContext(ModalContext);
  const newProps = useThemeProps('ModalBody', props);
  return <Box {...newProps} ref={ref} />;
};

export default React.memo(React.forwardRef(ModalBody));
