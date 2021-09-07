import React from 'react';
import Box from '../../primitives/Box';
import type { ITabViewsProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const TabViewsImpl = React.forwardRef(
  ({ children, ...props }: ITabViewsProps, ref?: any) => {
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
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
