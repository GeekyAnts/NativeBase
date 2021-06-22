import type { IStackProps } from '../../primitives';

export type IAppBarProps = IStackProps & {
  colorScheme?: string;
  statusBarHeight?: number;
  space?: number;
};

export type IAppBarComponentType = ((props: IAppBarProps) => JSX.Element) & {
  Left: React.MemoExoticComponent<(props: IStackProps) => JSX.Element>;
  Right: React.MemoExoticComponent<(props: IStackProps) => JSX.Element>;
  Content: React.MemoExoticComponent<(props: IStackProps) => JSX.Element>;
};
