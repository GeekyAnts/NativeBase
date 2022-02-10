import React, { useState, memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsProps } from './types';

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <Box {...props} ref={ref}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
