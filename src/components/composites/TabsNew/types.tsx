import type { IBoxProps, IPressableProps } from '../../primitives';

export type ITabsProps = IBoxProps<ITabsProps> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'underlined' | 'filled';
};

export type ITabProps = IPressableProps<ITabProps> & {
  index?: any;
  value?: string;
  isDisabled?: boolean;
};

export type ITabListProps = IBoxProps<ITabListProps> & {
  align?: 'center' | 'end' | 'start';
};

export type ITabsContextProps = {
  active?: any;
  setActive?: any;
  variant?: string;
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
