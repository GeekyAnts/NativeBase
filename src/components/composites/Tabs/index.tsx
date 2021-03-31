import { default as TabsMain } from './Tabs';
export { TabsContext } from './Context';
import { default as TabBar } from './TabBar';
import { default as Tab } from './Tab';
import { default as TabViews } from './TabViews';
import { default as TabView } from './TabView';
import TabIcon from './TabIcon';
import type { ITabsComponentType } from './types';

export type {
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
} from './types';

const TabsTemp: any = TabsMain;
TabsTemp.Bar = TabBar;
TabsTemp.Tab = Tab;
TabsTemp.Views = TabViews;
TabsTemp.View = TabView;
TabsTemp.Icon = TabIcon;

const Tabs = TabsTemp as ITabsComponentType;
export { Tabs };
