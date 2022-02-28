import type { IBoxProps, IPressableProps } from '../../primitives';
// import type { IButtonProps } from '../../primitives/Button';
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

export type ITabListProps = IBoxProps & {
  isDisabled?: boolean;
  orientation?: Orientation;
};

export type ITabProps<T> = IPressableProps<T> & {
  item: Node<T>;
  state: SingleSelectListState<T>;
  isDisabled?: boolean;
};

export type ITabBarProps = IBoxProps & {};
export type ITabItemProps = IBoxProps & {};

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
