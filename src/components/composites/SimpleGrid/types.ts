import type { InterfaceBoxProps } from '../../primitives/Box/types';

export type ISimpleGridProps = InterfaceBoxProps<ISimpleGridProps> & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
