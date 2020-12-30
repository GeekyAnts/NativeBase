import type {
  AccessibilityRole,
  AccessibilityState,
  ViewProps,
  ViewStyle,
} from 'react-native';
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

export type IButtonAccessibilityProps = {
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

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
  IButtonAccessibilityProps & {
    style?: ViewStyle;
    children?: any;
    highlight?: number | 0 | 1 | 0.5 | 0.25 | 0.75;
    colorScheme?: string;
    variant?: string;
    isLoading?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    onPress?: any;
    shadow?: number;
    leftIcon?: JSX.Element | Array<JSX.Element>;
    rightIcon?: JSX.Element | Array<JSX.Element>;
    isLoadingText?: string;
    spinner?: JSX.Element;
    isDisabled?: boolean;
  };

export type IButtonGroupProps = {
  children: JSX.Element | Array<JSX.Element>;
  variant?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  spacing?: string | number;
};
