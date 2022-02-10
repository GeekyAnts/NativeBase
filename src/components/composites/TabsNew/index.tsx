import { default as TabsMain } from './Tabs';
export { TabsContext } from './Context';
import { default as TabList } from './TabList';
import { default as Tab } from './Tab';
import { default as TabContents } from './TabContents';
import { default as TabBody } from './TabBody';
import type { ITabsComponentType } from './types';

export type {
  ITabsProps,
  ITabListProps,
  ITabProps,
  ITabContentsProps,
  ITabBodyProps,
  ITabsContextProps,
} from './types';

const TabsTemp: any = TabsMain;
TabsTemp.List = TabList;
TabsTemp.Tab = Tab;
TabsTemp.Contents = TabContents;
TabsTemp.Body = TabBody;

const Tabs = TabsTemp as ITabsComponentType;
export { Tabs };
