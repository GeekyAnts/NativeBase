import React, { forwardRef, memo } from 'react';
import Box from '../../primitives/Box';
import type { IActionsheetHeaderProps } from './types';
import { usePropsResolution } from '../../../hooks';

const ActionsheetHeader = (
  { children, ...props }: IActionsheetHeaderProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetHeader', props);

  return (
    <Box
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      fontSize="md"
      color="gray.900"
      {...newProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export default memo(forwardRef(ActionsheetHeader));
