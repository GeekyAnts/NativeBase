import React from 'react';
import Box from '../../primitives/Box';
import type { ITabsProps } from './types';
import { useThemeProps } from '../../../hooks';
import { TabsContext } from './Context';

const Tabs = ({ children, ...props }: ITabsProps, ref: any) => {
  const {
    onChange,
    activeTabStyle,
    inactiveTabStyle,
    tabBarStyle,
    isFitted,
    align,
    ...newProps
  } = useThemeProps('Tabs', props);
  const [index, setIndex] = React.useState(
    props.index || props.defaultIndex || 0
  );
  const changeHandler = (activeIndex: number) => {
    setIndex(activeIndex);
    onChange && onChange(activeIndex);
  };
  const setAlign = () => {
    switch (align) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'flex-start';
    }
  };

  return (
    <TabsContext.Provider
      value={{
        activeIndex: index,
        changeHandler,
        activeTabStyle,
        inactiveTabStyle,
        tabBarStyle,
        isFitted,
        align: setAlign(),
      }}
    >
      <Box width="100%" {...newProps} ref={ref}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

export default React.memo(React.forwardRef<any, ITabsProps>(Tabs));
