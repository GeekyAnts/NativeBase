import React, { memo, forwardRef } from 'react';
import { HStack } from '../../primitives';
import type { ITabListProps } from './types';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const restArr: any = [];
  React.Children.map(children, (child: any, index: any) => {
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
  });
  return (
    <HStack space={4} my={4} {...props} ref={ref}>
      {restArr}
    </HStack>
  );
};

export default memo(forwardRef(TabList));
