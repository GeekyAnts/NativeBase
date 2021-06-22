import type * as CSS from 'csstype';
import type { IBoxProps } from '../Box';

export type IFlexProps = IBoxProps & {
  direction?: CSS.Property.FlexDirection;
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  wrap?: CSS.Property.FlexWrap;
  basis?: CSS.Property.FlexBasis;
  grow?: CSS.Property.FlexGrow;
  shrink?: CSS.Property.FlexShrink;
};
