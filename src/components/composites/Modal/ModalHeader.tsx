import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';

const ModalHeader = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('ModalHeader', props);
  return <Box {...newProps} ref={ref} />;
};

export default memo(forwardRef(ModalHeader));
