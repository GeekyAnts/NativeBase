import type { SwitchProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';

import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customPositionProps,
} from '../../../utils/customProps';
import type { IAccessibilityProps } from '../../../utils/accessibilityTypes';

export type ISwitchProps = SwitchProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  customPositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  IAccessibilityProps &
  BorderProps & {
    style?: ViewStyle;
    size?: 'lg' | 'md' | 'sm';
    onColor?: string;
    offColor?: string;
    isDisabled?: boolean;
    name?: string;
    onToggle?: any;
    colorScheme?: string;
    iosBgColor?: string;
    isChecked?: boolean;
    defaultIsChecked?: boolean;
    isInvalid?: boolean;
    offTrackColor?: string;
  };
