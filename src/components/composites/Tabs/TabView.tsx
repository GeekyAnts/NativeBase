import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewProps } from './types';

const TabView = ({ children, ...props }: ITabViewProps, ref?: any) => {
  return (
    <Box p={3} {...props} ref={ref}>
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(TabView));
