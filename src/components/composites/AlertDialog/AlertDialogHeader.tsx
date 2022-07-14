import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';

const AlertDialogHeader = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDialogHeader', props);

  return <Box {...newProps} ref={ref} />;
};

export default memo(forwardRef(AlertDialogHeader));
