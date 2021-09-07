import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const TabView = ({ children, ...props }: ITabViewProps, ref?: any) => {
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box p={3} {...props} ref={ref}>
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(TabView));
