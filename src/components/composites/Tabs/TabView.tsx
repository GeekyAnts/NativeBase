import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewProps } from './types';

const TabView = ({ children, ...props }: ITabViewProps) => {
  return (
    <Box p={3} {...props}>
      {children}
    </Box>
  );
};

export default React.memo(TabView);
