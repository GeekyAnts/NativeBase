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
    <Box justifyContent="center" alignItems="center" {...newProps} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(ActionsheetHeader));
