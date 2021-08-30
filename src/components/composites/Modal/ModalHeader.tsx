import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';

const ModalHeader = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('ModalHeader', props);
  return <Box {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(ModalHeader));
