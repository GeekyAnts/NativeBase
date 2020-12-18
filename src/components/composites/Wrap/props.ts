import type { ViewProps, ViewStyle } from 'react-native';
import type * as CSS from 'csstype';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customFlexboxProps,
  customPositionProps,
} from '../../../utils/customProps';

export type IWrapProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  customFlexboxProps &
  customPositionProps &
  BorderProps & {
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[];
    direction?: CSS.Property.FlexDirection | undefined;
    align?: CSS.Property.AlignItems | undefined;
    justify?: CSS.Property.JustifyContent | undefined;
    wrap?: CSS.Property.FlexWrap | undefined;
    basis?: CSS.Property.FlexBasis | undefined;
    grow?: CSS.Property.FlexGrow | undefined;
    spacing?: number;
  };
