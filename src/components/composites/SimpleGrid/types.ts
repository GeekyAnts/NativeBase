import type { IBoxProps } from '../../primitives/Box/types';

export type ISimpleGridProps = IBoxProps<ISimpleGridProps> & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
