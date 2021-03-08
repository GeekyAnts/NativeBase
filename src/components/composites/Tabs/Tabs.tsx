import React from 'react';
import Box from '../../primitives/Box';
import type { ITabsProps } from './types';
import { useThemeProps } from '../../../hooks';
import { TabsContext } from './Context';
import { Item } from '@react-stately/collections';
import { useTabsState } from '@react-stately/tabs';
import TabViews from './TabViews';
import TabBar from './TabBar';
import { useTabs } from '@react-native-aria/tabs';

const getTabsAndBars = (children: any) => {
  let bars: any = [];
  let views: any = [];
  let items = React.Children.toArray(children);
  let tabBarProps = {};
  let tabViewsProps = {};

  items.forEach((item: any) => {
    if (item.type) {
      if (item.type.type.name === 'TabBar') {
        bars = bars.concat(item.props.children);
        tabBarProps = item.props;
      } else if (item.type.type.name === 'TabViews') {
        views = views.concat(item.props.children);
        tabViewsProps = item.props;
      }
    }
  });

  return { views, bars, tabViewsProps, tabBarProps };
};

const convertToCollectionItems = (children: any) => {
  const { views, bars } = getTabsAndBars(children);

  return bars.map((bar: any, index: number) => {
    return (
      <Item key={index} title={bar}>
        {views[index]}
      </Item>
    );
  });
};

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

  // useTabsState needs collection children.
  const collectionChildren = convertToCollectionItems(children);
  const { tabBarProps, tabViewsProps } = getTabsAndBars(children);

  const mappedProps = {
    children: collectionChildren,
    defaultSelectedKey:
      props.defaultIndex !== undefined
        ? props.defaultIndex.toString()
        : undefined,
    selectedKey: props.index !== undefined ? props.index.toString() : undefined,
    onSelectionChange: (e: any) => onChange && onChange(parseInt(e)),
  };

  // useTabsState needs collection children.
  let state = useTabsState(mappedProps);

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

  let tablistRef = React.useRef<any>();
  let { tabListProps, tabPanelProps } = useTabs(mappedProps, state, tablistRef);

  return (
    <TabsContext.Provider
      value={{
        activeTabStyle,
        inactiveTabStyle,
        tabBarStyle,
        isFitted,
        align: setAlign(),
        state,
      }}
    >
      <Box width="100%" {...newProps} ref={ref}>
        <TabBar
          tabListProps={tabListProps}
          {...tabBarProps}
          tablistRef={tablistRef}
        />
        <TabViews {...tabPanelProps} {...tabViewsProps}>
          {state.selectedItem && state.selectedItem.props.children}
        </TabViews>
      </Box>
    </TabsContext.Provider>
  );
};

export default React.memo(React.forwardRef(Tabs));
