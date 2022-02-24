import type { IBoxProps, IPressableProps } from '../../primitives';
// import type { IButtonProps } from '../../primitives/Button';
import type { Orientation, Node } from '@react-types/shared';
import type { SingleSelectListState } from '@react-stately/list';

export type ITabsProps = IBoxProps<ITabsProps> & {
  variant?: 'underlined' | 'solid';
  orientation?: Orientation;
};

export type ITabProps<T> = IPressableProps<T> & {
  item: Node<T>;
  isDisabled?: boolean;
  orientation?: Orientation;
};

export type ITabListProps<T> = IBoxProps<T> & {
  isDisabled?: boolean;
  orientation?: Orientation;
};

export type ITabsContextProps<T> = {
  state: SingleSelectListState<T>;
  variant?: 'underlined' | 'solid';
  orientation?: Orientation;
};

export type ITabBodyProps = IBoxProps<ITabBodyProps> & {};

export type ITabContentsProps = IBoxProps<ITabContentsProps> & {};

export type ITabsComponentType = ((
  props: ITabsProps & { ref?: any }
) => JSX.Element) & {
  List: React.MemoExoticComponent<
    (props: ITabListProps<any> & { ref?: any }) => JSX.Element
  >;
  Tab: React.MemoExoticComponent<
    (props: ITabProps<any> & { ref?: any }) => JSX.Element
  >;
  Contents: React.MemoExoticComponent<
    (props: ITabContentsProps & { ref?: any }) => JSX.Element
  >;
  Body: React.MemoExoticComponent<
    (props: ITabBodyProps & { ref?: any }) => JSX.Element
  >;
};
