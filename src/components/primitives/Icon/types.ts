import type { IPlatformProps } from '../../types/IPlafromProps';
import type { TextStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTypographyProps,
  customTransformProps,
  customFlexboxProps,
  customPositionProps,
} from '../../../utils/customProps';

export type IIconProps = IPlatformProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  PositionProps &
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
  BorderProps & {
    // name?: IconNameType;
    // type?: IconType;
    as?: any;
    style?: TextStyle;
    viewBox?: string;
    size?: string | number;
    color?: string;
    focusable?: boolean;
    children?: JSX.Element[] | JSX.Element;
    stroke?: string;
    strokeWidth?: string;
  };

export type ICreateIconProps = {
  viewBox?: string;
  path?: JSX.Element[] | JSX.Element;
  d?: string;
};
