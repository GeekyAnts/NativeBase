import React, { useRef, memo, forwardRef } from 'react';
import Stack from '../../primitives/Stack/Stack';
import Box from '../../primitives/Box';
import TabBar from './TabBar';
import TabList from './TabList';
import TabContents from './TabContents';
import { TabsContext } from './Context';
import type { ITabsProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Item } from '@react-stately/collections';
import { useTabsState } from '@react-stately/tabs';
import { useTabs } from '@react-native-aria/tabs';
import { mergeRefs } from '../../../utils';

const getTabsAndBars = (children: any) => {
  let bars: any = [];
  let contents: any = [];
  const items = React.Children.toArray(children);
  let tabBarProps: any = { props: {}, ref: undefined };
  let tabContentsProps = { props: {}, ref: undefined };
  let tabItemProps: any = [];
  items.forEach((item: any) => {
    if (item.type) {
      if (item.type === TabBar) {
        bars = bars.concat(item.props.children);
        tabBarProps = { props: item.props, ref: item.ref };
        item.props.children.forEach((tabItem: any) => {
          tabItemProps = tabItemProps.concat({
            props: tabItem.props,
            ref: tabItem.ref,
          });
        });
      } else if (item.type === TabContents) {
        contents = contents.concat(item.props.children);
        tabContentsProps = { props: item.props, ref: item.ref };
      }
    }
  });
  return { contents, bars, tabContentsProps, tabBarProps, tabItemProps };
};

const convertToCollectionItems = (children: any) => {
  const { contents, bars } = getTabsAndBars(children);
  return bars.map((bar: any, index: number) => {
    let textValue;
    if (bar.props.accessibilityLabel) {
      textValue = bar.props.accessibilityLabel;
    } else if (typeof bar.props.children === 'string') {
      textValue = bar.props.children;
    }
    return (
      <Item key={index} title={bar} textValue={textValue}>
        {contents[index]}
      </Item>
    );
  });
};

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const collectionChildren = convertToCollectionItems(children);
  const { tabBarProps, tabContentsProps, tabItemProps } = getTabsAndBars(
    children
  );

  const { ...resolvedProps } = usePropsResolution('Tabs', props);
  const state = useTabsState({ children: collectionChildren });
  const tablistRef = useRef<HTMLDivElement>();
  const { tabListProps, tabPanelProps } = useTabs(
    { children: collectionChildren },
    state,
    tablistRef
  );
  const variant = props.variant ?? 'underlined';
  const orientation = props.orientation ?? 'horizontal';

  return (
    <TabsContext.Provider value={{ variant, orientation }}>
      <Stack
        {...resolvedProps}
        ref={ref}
        direction={orientation === 'horizontal' ? 'column' : 'row'}
      >
        <TabList
          {...tabListProps}
          ref={mergeRefs([tablistRef, tabBarProps.ref])}
          state={state}
          tabBarProps={tabBarProps}
          tabItemProps={tabItemProps}
        />
        <Box {...tabPanelProps} {...tabContentsProps.props}>
          {state.selectedItem && state.selectedItem.props.children}
        </Box>
      </Stack>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
