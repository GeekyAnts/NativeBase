import React, { memo, forwardRef } from 'react';
import { HStack } from '../../primitives';
import { ScrollView } from '../../basic/ScrollView';
import Tab from './Tab';
import type { ITabListProps } from './types';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const restArr: any = [];
  React.Children.map(children, (child: any, index: any) => {
    if (child.type === Tab) {
      const value = child.props.value;
      const ele = React.cloneElement(
        child,
        {
          key: `${index}`,
          value: value,
          ...child.props,
        },
        child.props.children
      );
      restArr.push(ele);
    } else {
      restArr.push(child);
    }
  });

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} mb={4}>
      <HStack space={4} my={4} {...props} ref={ref}>
        {restArr}
      </HStack>
    </ScrollView>
  );
};

export default memo(forwardRef(TabList));
