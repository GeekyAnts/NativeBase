import type * as CSS from 'csstype';
import type { IBoxProps } from '../Box';

export type IGridItemProps = IBoxProps & {
  gap?: CSS.Property.Gap;
  rowSpan?: number;
  colSpan?: number;
  colStart?: CSS.Property.GridColumnStart;
  colEnd?: CSS.Property.GridColumnEnd;
  rowStart?: CSS.Property.GridColumnStart;
  rowEnd?: CSS.Property.GridColumnEnd;
  area?: string;
};
