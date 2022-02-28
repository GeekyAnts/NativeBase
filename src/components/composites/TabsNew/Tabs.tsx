import React, { useRef, memo, forwardRef } from 'react';
import Stack from '../../primitives/Stack/Stack';
import { TabsContext } from './Context';
import TabContents from './TabContents';
import type { ITabsProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import TabList from './TabList';
import { Item } from '@react-stately/collections';
import { useTabsState } from '@react-stately/tabs';
import { useTabs } from '@react-native-aria/tabs';
import Box from '../../primitives/Box';
import TabBar from './TabBar';

const getTabsAndBars = (children: any) => {
  let bars: any = [];
  let views: any = [];
  const items = React.Children.toArray(children);
  let tabBarProps: any = { props: {}, ref: undefined };
  let tabViewsProps = { props: {}, ref: undefined };
  items.forEach((item: any) => {
    if (item.type) {
      if (item.type === TabBar) {
        bars = bars.concat(item.props.children);
        tabBarProps = { props: item.props, ref: item.ref };
      } else if (item.type === TabContents) {
        views = views.concat(item.props.children);
        tabViewsProps = { props: item.props, ref: item.ref };
      }
    }
  });
  return { views, bars, tabViewsProps, tabBarProps };
};

const convertToCollectionItems = (children: any) => {
  const { views, bars } = getTabsAndBars(children);
  return bars.map((bar: any, index: number) => {
    let textValue;
    if (bar.props.accessibilityLabel) {
      textValue = bar.props.accessibilityLabel;
    } else if (typeof bar.props.children === 'string') {
      textValue = bar.props.children;
    }
    return (
      <Item key={index} title={bar} textValue={textValue}>
        {views[index]}
      </Item>
    );
  });
};

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('Tabs', props);
  const collectionChildren = convertToCollectionItems(children);
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
      <Stack {...resolvedProps} ref={ref}>
        <TabList {...tabListProps} ref={tablistRef} state={state} />
        <Box {...tabPanelProps} p="4">
          {state.selectedItem && state.selectedItem.props.children}
        </Box>
      </Stack>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
