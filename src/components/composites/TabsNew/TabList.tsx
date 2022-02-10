import React, { memo, forwardRef, useContext } from 'react';
import { HStack } from '../../primitives';
import { TabsContext } from './Context';
import type { ITabListProps, ITabsContextProps } from './types';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const { active }: ITabsContextProps = useContext(TabsContext);
  const restArr: any = [];
  React.Children.map(children, (child: any, index: any) => {
    const ele = React.cloneElement(
      child,
      {
        key: `${index}`,
        index: index,
        bg: index === active ? 'green.500' : 'gray.200',
        ...child.props,
      },
      child.props.children
    );
    restArr.push(ele);
  });
  return (
    <HStack space={4} my={4} {...props} ref={ref}>
      {restArr}
    </HStack>
  );
};

export default memo(forwardRef(TabList));
