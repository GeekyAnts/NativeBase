import type { IBoxProps } from 'native-base';

export type ISimpleGridProps = IBoxProps & {
  spacing?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
