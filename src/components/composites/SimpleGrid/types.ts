import type { IBoxProps } from 'native-base';

export type ISimpleGridProps = IBoxProps<ISimpleGridProps> & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
