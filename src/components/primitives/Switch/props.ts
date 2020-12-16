import type { SwitchProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';

export type ISwitchProps = SwitchProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
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
    ariaLabel?: string;
    offTrackColor?: string;
  };
