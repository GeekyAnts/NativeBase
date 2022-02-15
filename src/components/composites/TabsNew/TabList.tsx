import React, { memo, forwardRef } from 'react';
import HStack from '../../primitives/Stack/HStack';
import { ScrollView } from '../../basic/ScrollView';
import Tab from './Tab';
import type { ITabListProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const { align, ...resolvedProps } = usePropsResolution(
    'TabList',
    props,
    {},
    undefined
  );

  const tabArr: any = [];
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
      tabArr.push(ele);
    } else {
      tabArr.push(child);
    }
  });

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} mb={4}>
      <HStack {...resolvedProps} {...props} ref={ref} justifyContent={align}>
        {tabArr}
      </HStack>
    </ScrollView>
  );
};

export default memo(forwardRef(TabList));
