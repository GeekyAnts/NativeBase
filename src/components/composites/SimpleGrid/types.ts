import type { ResponsiveValue } from '../../../components/types';
import type { InterfaceBoxProps } from '../../primitives/Box/types';

export type ISimpleGridProps = InterfaceBoxProps<ISimpleGridProps> & {
  space?: ResponsiveValue<number>;
  columns?: ResponsiveValue<number>;
  minChildWidth?: ResponsiveValue<number>;
  spacingX?: ResponsiveValue<number>;
  spacingY?: ResponsiveValue<number>;
};
