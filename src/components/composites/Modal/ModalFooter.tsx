import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';

const ModalFooter = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('ModalFooter', props);
  return <Box {...newProps} ref={ref} />;
};

export default memo(forwardRef(ModalFooter));
