import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';

const AlertDialogFooter = (props: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertDialogFooter', props);

  return <Box {...newProps} ref={ref} />;
};

export default memo(forwardRef(AlertDialogFooter));
