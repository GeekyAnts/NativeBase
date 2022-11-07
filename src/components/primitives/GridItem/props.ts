import type * as CSS from 'csstype';
import type { CustomProps } from '../../types/utils';
import type { InterfaceBoxProps } from '../Box/types';
// import type { IBoxProps } from '../Box';

// export type IGridItemProps = IBoxProps<IGridItemProps> & {
//   gap?: CSS.Property.Gap;
//   rowSpan?: number;
//   colSpan?: number;
//   colStart?: CSS.Property.GridColumnStart;
//   colEnd?: CSS.Property.GridColumnEnd;
//   rowStart?: CSS.Property.GridColumnStart;
//   rowEnd?: CSS.Property.GridColumnEnd;
//   area?: string;
// };

export type IGridItemProps = (InterfaceBoxProps<IGridItemProps> & {
  gap?: CSS.Property.Gap;
  rowSpan?: number;
  colSpan?: number;
  colStart?: CSS.Property.GridColumnStart;
  colEnd?: CSS.Property.GridColumnEnd;
  rowStart?: CSS.Property.GridColumnStart;
  rowEnd?: CSS.Property.GridColumnEnd;
  area?: string;
}) &
  CustomProps<'Box'>;
