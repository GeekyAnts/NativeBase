import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewsProps } from './types';

const TabViewsImpl = React.forwardRef(
  ({ children, ...props }: ITabViewsProps, ref?: any) => {
    return (
      <Box {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);

const TabViews = React.memo(TabViewsImpl);
TabViews.displayName = 'TabViews';

export default TabViews;
