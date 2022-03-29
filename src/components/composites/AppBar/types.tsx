import type { InterfaceStackProps } from '../../primitives/Stack/Stack';

export type IAppBarProps = InterfaceStackProps & {
  colorScheme?: string;
  statusBarHeight?: number;
  space?: number;
};

export type IAppBarComponentType = ((props: IAppBarProps) => JSX.Element) & {
  Left: React.MemoExoticComponent<(props: InterfaceStackProps) => JSX.Element>;
  Right: React.MemoExoticComponent<(props: InterfaceStackProps) => JSX.Element>;
  Content: React.MemoExoticComponent<
    (props: InterfaceStackProps) => JSX.Element
  >;
};
