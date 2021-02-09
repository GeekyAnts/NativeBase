import React from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsContextProps, ITabViewProps } from './types';

const TabView = ({ index, children, ...props }: ITabViewProps) => {
  const { activeIndex }: ITabsContextProps = React.useContext(TabsContext);
  const tabViewTemplate = () => {
    return activeIndex === index ? (
      <Box p={3} {...props}>
        {children}
      </Box>
    ) : null;
  };
  return tabViewTemplate();
};

export default React.memo(TabView);
