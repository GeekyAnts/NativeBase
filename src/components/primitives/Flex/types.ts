import type * as CSS from 'csstype';
import type { CustomProps } from '../../types/utils';
import type { InterfaceBoxProps } from '../Box/types';

// export type IFlexProps = IBoxProps<IFlexProps> & {
//   direction?: CSS.Property.FlexDirection;
//   align?: CSS.Property.AlignItems;
//   justify?: CSS.Property.JustifyContent;
//   wrap?: CSS.Property.FlexWrap;
//   basis?: CSS.Property.FlexBasis;
//   grow?: CSS.Property.FlexGrow;
//   shrink?: CSS.Property.FlexShrink;
// };

export type IFlexProps = (InterfaceBoxProps<IFlexProps> & {
  direction?: CSS.Property.FlexDirection;
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  wrap?: CSS.Property.FlexWrap;
  basis?: CSS.Property.FlexBasis;
  grow?: CSS.Property.FlexGrow;
  shrink?: CSS.Property.FlexShrink;
}) &
  CustomProps<'Flex'>;
