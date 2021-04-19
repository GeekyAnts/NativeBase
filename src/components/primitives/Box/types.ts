import type { ViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type {
  customBackgroundProps,
  customBorderProps,
  customExtraProps,
  customFlexboxProps,
  customLayoutProps,
  customOutlineProps,
  customPositionProps,
  customShadowProps,
  customTransformProps,
  customTypographyProps,
  SafeAreaProps,
} from '../../../utils/customProps';
import type { ITextProps } from './../Text/types';

// TODO: Need to mmoved globally or some other place.
export type IPlatformProps = {
  _web?: any;
  _ios?: any;
  _android?: any;
};

export type IBoxProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  PositionProps &
  BorderProps &
  SafeAreaProps &
  customBorderProps &
  customPositionProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  customTransformProps &
  customFlexboxProps &
  IPlatformProps & {
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[] | string | any;
    shadow?: number;
    _text?: ITextProps;
    _web?: any;
  };
