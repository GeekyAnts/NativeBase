import React, { memo, forwardRef, useContext } from 'react';
import Stack from '../../primitives/Stack/Stack';
// import { ScrollView } from '../../basic/ScrollView';
import Tab from './Tab';
import type { ITabListProps, ITabsContextProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { TabsContext } from './Context';

const TabList = ({ children, ...props }: ITabListProps, ref?: any) => {
  const { orientation }: ITabsContextProps = useContext(TabsContext);
  const {
    align,
    // scrollable,
    // showsHorizontalScrollIndicator,
    _item,
    _selectedItem,
    ...resolvedProps
  } = usePropsResolution('TabList', props, {}, undefined);
  const tabArr: any = [];
  React.Children.map(children, (child: any, index: any) => {
    if (child?.type === Tab) {
      const value = child?.props?.value;
      const ele = React.cloneElement(
        child,
        {
          key: child?.key ?? `${index}`,
          value: value,
          _selectedItem,
          ...child.props,
          ..._item,
        },
        child?.props?.children
      );
      tabArr.push(ele);
    } else {
      tabArr.push(child);
    }
  });

  // if (scrollable)
  //   return (
  //     <ScrollView
  //       horizontal={true}
  //       showsHorizontalScrollIndicator={true}
  //       mb={4}
  //     >
  //       <Stack
  //         {...resolvedProps}
  //         {...props}
  //         ref={ref}
  //         justifyContent={align}
  //         direction={orientation === 'horizontal' ? 'row' : 'column'}
  //         accessibilityLabel="Select a tab to activate"
  //       >
  //         {tabArr}
  //       </Stack>
  //     </ScrollView>
  //   );
  // else
  return (
    <Stack
      {...resolvedProps}
      {...props}
      ref={ref}
      justifyContent={align}
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      accessibilityLabel="Select a tab to activate"
    >
      {tabArr}
    </Stack>
  );
};

export default memo(forwardRef(TabList));
