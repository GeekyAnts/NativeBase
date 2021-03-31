import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewsProps } from './types';

const TabViewsImpl = ({ children, ...props }: ITabViewsProps) => {
  return <Box {...props}>{children}</Box>;
};

const TabViews = React.memo(TabViewsImpl);
TabViews.displayName = 'TabViews';

export default TabViews;
