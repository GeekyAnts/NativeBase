import { default as TabsMain } from './Tabs';
export { TabsContext } from './Context';
import { default as TabBar } from './TabBar';
import { default as TabItem } from './TabItem';
import { default as TabContents } from './TabContents';
import { default as TabBody } from './TabBody';
import type { ITabsComponentType } from './types';

export type {
  ITabsProps,
  ITabBarProps,
  ITabItemProps,
  ITabContentsProps,
  ITabBodyProps,
  ITabsContextProps,
} from './types';

const TabsTemp: any = TabsMain;
TabsTemp.Bar = TabBar;
TabsTemp.Item = TabItem;
TabsTemp.Contents = TabContents;
TabsTemp.Body = TabBody;

const Tabs = TabsTemp as ITabsComponentType;
export { Tabs };
