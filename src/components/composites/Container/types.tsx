import type { IBoxProps } from '../../primitives/Box';

export type IContainerProps = IBoxProps<IContainerProps> & {
  centerContent?: boolean;
};
