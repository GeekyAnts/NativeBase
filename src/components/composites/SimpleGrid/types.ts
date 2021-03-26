import type { IBoxProps } from 'native-base';

export type ISimpleGridProps = IBoxProps & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
