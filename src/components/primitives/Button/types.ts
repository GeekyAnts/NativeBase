import type { ViewProps, ViewStyle } from 'react-native';
import type { IAccessibilityProps } from '../../../utils/accessibilityTypes';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBackgroundProps,
  customBorderProps,
  customExtraProps,
  customLayoutProps,
  customOutlineProps,
  customShadowProps,
  customFlexboxProps,
  customPositionProps,
} from '../../../utils/customProps';
import type { ITextProps } from './../Text/types';

export type IButtonProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customFlexboxProps &
  customPositionProps &
  customLayoutProps &
  customBackgroundProps &
  IAccessibilityProps & {
    style?: ViewStyle;
    children?: any;
    highlight?: number | 0 | 1 | 0.5 | 0.25 | 0.75;
    colorScheme?: string;
    variant?: string;
    isLoading?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    onPress?: any;
    shadow?: number;
    startIcon?: JSX.Element | Array<JSX.Element>;
    endIcon?: JSX.Element | Array<JSX.Element>;
    isLoadingText?: string;
    spinner?: JSX.Element;
    isDisabled?: boolean;
    _text?: ITextProps;
  };

export type IButtonGroupProps = {
  children: JSX.Element | Array<JSX.Element>;
  variant?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  spacing?: string | number;
};
