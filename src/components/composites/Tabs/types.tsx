import type { IBoxProps } from '../../primitives';

export type ITabsProps = IBoxProps & {
  align?: 'center' | 'end' | 'start';
  id?: string;
  colorScheme?: string;
  index?: number;
  defaultIndex?: number;
  isFitted?: boolean;
  isLazy?: boolean;
  isManual?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: string;
  onChange?: (index?: number) => void;
};

export type ITabBarProps = IBoxProps & {
  align?: 'center' | 'end' | 'start';
  isFitted?: boolean;
  size?: 'sm' | 'md' | 'lg';
};
export type ITabProps = IBoxProps & {
  index?: number;
  isSelected?: boolean;
  isDisabled?: boolean;
  id?: string;
  panelId?: string;
  _active?: any;
  _disabled?: any;
  _hover?: any;
};

export type ITabViewsProps = IBoxProps & {};
export type ITabViewProps = IBoxProps & {
  index?: number;
};

export type ITabsContextProps = {
  activeIndex?: number;
  changeHandler?: (index?: number) => void;
  activeTabStyle?: any;
  inactiveTabStyle?: any;
  tabBarStyle?: any;
  isFitted?: boolean;
  align?: 'start' | 'center' | 'end';
};
