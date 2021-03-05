import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewsProps } from './types';

const TabViews = ({ children, ...props }: ITabViewsProps) => {
  return <Box {...props}>{children}</Box>;
};

export default React.memo(TabViews);
