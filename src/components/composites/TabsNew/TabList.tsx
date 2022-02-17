import React, { memo, forwardRef } from 'react';
import HStack from '../../primitives/Stack/HStack';
import { ScrollView } from '../../basic/ScrollView';
import Tab from './Tab';
import type { ITabListProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const {
    align,
    scrollable,
    showsHorizontalScrollIndicator,
    _item,
    _selectedItem,
    ...resolvedProps
  } = usePropsResolution('TabList', props, {}, undefined);
  const tabArr: any = [];
  React.Children.map(children, (child: any, index: any) => {
    if (child.type === Tab) {
      const value = child.props.value;
      const ele = React.cloneElement(
        child,
        {
          key: `${index}`,
          value: value,
          _selectedItem,
          ...child.props,
          ..._item,
        },
        child.props.children
      );
      tabArr.push(ele);
    } else {
      tabArr.push(child);
    }
  });

  if (scrollable)
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={!!showsHorizontalScrollIndicator}
        mb={4}
      >
        <HStack {...resolvedProps} {...props} ref={ref} justifyContent={align}>
          {tabArr}
        </HStack>
      </ScrollView>
    );
  else
    return (
      <HStack {...resolvedProps} {...props} ref={ref} justifyContent={align}>
        {tabArr}
      </HStack>
    );
};

export default memo(forwardRef(TabList));
