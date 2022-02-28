import type { IBoxProps, IPressableProps } from '../../primitives';
import type { Orientation, Node } from '@react-types/shared';
import type { SingleSelectListState } from '@react-stately/list';

export type ITabsProps = IBoxProps<ITabsProps> & {
  variant?: 'underlined' | 'solid';
  orientation?: Orientation;
};

export type ITabsContextProps = {
  variant?: 'underlined' | 'solid';
  orientation?: Orientation;
};

export type ITabBarProps = IBoxProps & {
  isDisabled?: boolean;
};

export type ITabListProps = IBoxProps & {
  isDisabled?: boolean;
  orientation?: Orientation;
  tabBarProps?: any;
  tabItemProps?: any;
};

export type ITabProps<T> = IPressableProps<T> & {
  item: Node<T>;
  state: SingleSelectListState<T>;
  isDisabled?: boolean;
  tabItemProps?: any;
};

export type ITabItemProps = IPressableProps & {
  isDisabled?: boolean;
};

export type ITabBodyProps = IBoxProps<ITabBodyProps> & {};

export type ITabContentsProps = IBoxProps<ITabContentsProps> & {};

export type ITabsComponentType = ((
  props: ITabsProps & { ref?: any }
) => JSX.Element) & {
  Bar: React.MemoExoticComponent<
    (props: ITabBarProps & { ref?: any }) => JSX.Element
  >;
  Item: React.MemoExoticComponent<
    (props: ITabItemProps & { ref?: any }) => JSX.Element
  >;
  Contents: React.MemoExoticComponent<
    (props: ITabContentsProps & { ref?: any }) => JSX.Element
  >;
  Body: React.MemoExoticComponent<
    (props: ITabBodyProps & { ref?: any }) => JSX.Element
  >;
};
