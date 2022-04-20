import type { RefObject } from 'react';
import type { ViewProps } from 'react-native';
import type { InterfaceBoxProps } from '../../primitives/Box';
import type { InterfaceIconProps } from '../../primitives/Icon/types';
import type { ColorSchemeType } from '../../../components/types';

export type ITabsProps = InterfaceBoxProps<ITabsProps> & {
  align?: 'center' | 'end' | 'start';
  id?: string;
  colorScheme?: ColorSchemeType;
  index?: number;
  defaultIndex?: number;
  isFitted?: boolean;
  isLazy?: boolean;
  isManual?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'filled-outline';
  onChange?: (index: number) => void;
  keyboardActivation?: 'manual' | 'automatic';
};

export type ITabBarProps = InterfaceBoxProps<ITabBarProps> & {
  align?: 'center' | 'end' | 'start';
  isFitted?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tablistRef?: RefObject<any>;
  tabListProps?: ViewProps;
};
export type ITabProps = InterfaceBoxProps<ITabProps> & {
  isDisabled?: boolean;
  _active?: any;
  _disabled?: any;
  _hover?: any;
  item?: any;
};

export type ITabViewsProps = InterfaceBoxProps<ITabViewsProps>;
export type ITabViewProps = InterfaceBoxProps<ITabViewProps> & {
  index?: number;
};

export type ITabsContextProps = {
  activeIconProps?: any;
  inactiveIconProps?: any;
  activeTabStyle?: any;
  inactiveTabStyle?: any;
  tabBarStyle?: any;
  isFitted?: boolean;
  align?: 'start' | 'center' | 'end';
  state?: any;
};
export type ITabContextProps = {
  isSelected?: boolean;
};

export type ITabsComponentType = ((
  props: ITabsProps & { ref?: any }
) => JSX.Element) & {
  Bar: React.MemoExoticComponent<
    (props: ITabBarProps & { ref?: any }) => JSX.Element
  >;
  Tab: React.MemoExoticComponent<
    (props: ITabProps & { ref?: any }) => JSX.Element
  >;
  Views: React.MemoExoticComponent<
    (props: ITabViewsProps & { ref?: any }) => JSX.Element
  >;
  View: React.MemoExoticComponent<
    (props: ITabViewProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: InterfaceIconProps & { ref?: any }) => JSX.Element
  >;
};
