import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverFooter = (props: IBoxProps, ref?: any) => {
  const resolvedProps = usePropsResolution('PopoverFooter', props);
  return <Box {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(PopoverFooter));
