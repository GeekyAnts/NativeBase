import type { IBoxProps, IPressableProps } from '../../primitives';

export type ITabsProps = IBoxProps<ITabsProps> & {};

export type ITabProps = IPressableProps<ITabProps> & {
  index?: any;
  value?: string;
};

export type ITabListProps = IBoxProps<ITabListProps> & {};

export type ITabsContextProps = {
  active?: any;
  setActive?: any;
};

export type ITabBodyProps = IBoxProps<ITabBodyProps> & {
  for?: string;
};

export type ITabContentsProps = IBoxProps<ITabContentsProps> & {};

export type ITabsComponentType = ((
  props: ITabsProps & { ref?: any }
) => JSX.Element) & {
  List: React.MemoExoticComponent<
    (props: ITabListProps & { ref?: any }) => JSX.Element
  >;
  Tab: React.MemoExoticComponent<
    (props: ITabProps & { ref?: any }) => JSX.Element
  >;
  Contents: React.MemoExoticComponent<
    (props: ITabContentsProps & { ref?: any }) => JSX.Element
  >;
  Body: React.MemoExoticComponent<
    (props: ITabBodyProps & { ref?: any }) => JSX.Element
  >;
};
