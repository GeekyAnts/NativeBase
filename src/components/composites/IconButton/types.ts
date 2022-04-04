import type { InterfacePressableProps } from '../../primitives/Pressable/types';
import type { IIconProps } from '../../primitives/Icon';
import type { CustomProps, ResponsiveValue, VariantType } from '../../types';
import type { ISizes } from '../../../theme/base/sizes';

export interface InterfaceIconButtonProps
  extends Omit<InterfacePressableProps, 'children' | 'color'>,
    Omit<
      IIconProps,
      | 'delayLongPress'
      | 'disabled'
      | 'hitSlop'
      | 'onLongPress'
      | 'onPress'
      | 'onPressIn'
      | 'onPressOut'
      | 'style'
      | 'size'
      | '_light'
      | '_dark'
      | '_web'
      | '_android'
      | '_ios'
    > {
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: string;
  /**
   * The variant of the button style to use.
   * @default 'ghost'
   */
  variant?: VariantType<'IconButton'>;
  /**
   * The size of the button.
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The icon to be used. Refer to the Icon section of the docs for the available icon options.
   */
  icon?: JSX.Element;
  /**
   * Props to be passed to the icon used inside of IconButton.
   */
  _icon?: IIconProps;
  /**
   *
   */
  _hover?: IIconButtonProps;
  /**
   *
   */
  _pressed?: IIconButtonProps;
  /**
   *
   */
  _focus?: IIconButtonProps;
}

export type IIconButtonProps = InterfaceIconButtonProps & CustomProps<'Icon'>;
