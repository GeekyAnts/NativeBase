import React from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsContextProps, ITabBarProps } from './types';

const TabBar = ({ tablistRef, tabListProps, ...props }: ITabBarProps) => {
  const {
    tabBarStyle,
    align,
    isFitted,
    state,
  }: ITabsContextProps = React.useContext(TabsContext);

  return (
    <>
      <Box
        flexDirection="row"
        width="100%"
        justifyContent={isFitted ? 'space-between' : align}
        {...tabListProps}
        {...tabBarStyle}
        {...props}
        ref={tablistRef}
      >
        {[...state.collection].map((item) =>
          React.cloneElement(item.rendered, { item, key: item.key })
        )}
      </Box>
    </>
  );
};

export default React.memo(TabBar);
