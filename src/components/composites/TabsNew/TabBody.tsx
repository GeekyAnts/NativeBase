import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { ITabBodyProps } from './types';

const TabBody = ({ children, ...props }: ITabBodyProps, ref?: any) => {
  return (
    <Box bg="blue.200" p="4" h="full" {...props} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TabBody));
