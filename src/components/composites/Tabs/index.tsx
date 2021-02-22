import { default as TabsMain } from './Tabs';
export { TabsContext } from './Context';
import { default as TabBar } from './TabBar';
import { default as Tab } from './Tab';
import { default as TabViews } from './TabViews';
import { default as TabView } from './TabView';
export type {
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
} from './types';

import type { ITabsComponentType } from './types';

const TabsTemp: any = TabsMain;
TabsTemp.Bar = TabBar;
TabsTemp.Tab = Tab;
TabsTemp.Views = TabViews;
TabsTemp.View = TabView;

const Tabs = TabsTemp as ITabsComponentType;
export { Tabs };
