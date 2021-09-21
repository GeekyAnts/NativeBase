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
import { mergeRefs } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const getTabsAndBars = (children: any) => {
  let bars: any = [];
  let views: any = [];
  let items = React.Children.toArray(children);
  let tabBarProps: any = { props: {}, ref: undefined };
  let tabViewsProps = { props: {}, ref: undefined };
  items.forEach((item: any) => {
    if (item.type) {
      if (item.type.displayName === 'TabBar') {
        bars = bars.concat(item.props.children);
        tabBarProps = { props: item.props, ref: item.ref };
      } else if (item.type.displayName === 'TabViews') {
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
const Tabs = ({ children, ...props }: ITabsProps, ref: any) => {
  const {
    onChange,
    activeTabStyle,
    inactiveTabStyle,
    activeIconProps,
    inactiveIconProps,
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
    keyboardActivation: props.keyboardActivation,
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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <TabsContext.Provider
      value={{
        activeTabStyle,
        inactiveTabStyle,
        activeIconProps,
        inactiveIconProps,
        tabBarStyle,
        isFitted,
        align: setAlign(),
        state,
      }}
    >
      <Box width="100%" {...newProps} ref={ref}>
        <TabBar
          tabListProps={tabListProps}
          {...tabBarProps.props}
          tablistRef={mergeRefs([tablistRef, tabBarProps.ref])}
        />
        <TabViews
          {...tabPanelProps}
          {...tabViewsProps.props}
          ref={tabViewsProps.ref}
        >
          {state.selectedItem && state.selectedItem.props.children}
        </TabViews>
      </Box>
    </TabsContext.Provider>
  );
};
export default React.memo(React.forwardRef(Tabs));
