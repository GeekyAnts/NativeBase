import type { SwitchProps } from 'react-native';
import type {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  OutlineProps,
  LayoutProps,
  ExtraProps,
  ShadowProps,
  PositionProps,
} from '../../types';

export interface ISwitchProps
  extends SwitchProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    PositionProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    LayoutProps,
    BackgroundProps,
    BorderProps {
  /**
   * The size (width and height) of the switch.
   * @default md
   */
  size?: 'lg' | 'md' | 'sm';
  /**
   * If true, set the disabled to the invalid state.
   */
  isDisabled?: boolean;
  /**
   * The input name of the Switch when used in a form.
   */
  name?: string;
  /**
   * Function called when the state of the Switch changes.
   */
  onToggle?: any;
  /**
   * If true, set the Switch to the checked state.
   */
  isChecked?: boolean;
  /**
   * If true, the checkbox will be initially checked.
   */
  defaultIsChecked?: boolean;
  /**
   * If true, set the switch to the invalid state.
   */
  isInvalid?: boolean;
  /**
   * The track color of the Switch when on.
   */
  onTrackColor?: string;
  /**
   * The track color of the Switch when off.
   */
  offTrackColor?: string;
  /**
   * The thumb color of the Switch when on.
   */
  onThumbColor?: string;
  /**
   * The thumb color of the Switch when off.
   */
  offThumbColor?: string;
  /**
   * Color scheme to be used for the Switch
   */
  colorScheme?: string;
  /**
   * Props when Switch is hovered. Accepts all the Switch props.
   */
  _hover?: any;
}
