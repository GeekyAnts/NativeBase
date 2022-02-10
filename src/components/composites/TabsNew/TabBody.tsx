import React, { memo, forwardRef } from 'react';
import { Box } from '../../primitives';
import type { ITabBodyProps } from './types';

const TabBody = ({ children, ...props }: ITabBodyProps) => {
  return (
    <Box bg="blue.200" p="4" {...props}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TabBody));
