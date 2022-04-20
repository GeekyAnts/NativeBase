import type { InterfacePressableProps } from '../../primitives/Pressable/types';
import type { IIconProps } from '../../primitives/Icon';
import type { ColorSchemeType, PlatformProps } from '../../../components/types';

import type { CustomProps, VariantType } from '../../types';
import type { ThemeComponentSizeType } from '../../../components/types/utils';
export interface InterfaceIconButtonProps
  extends Omit<
      InterfacePressableProps,
      | 'children'
      | 'color'
      | '_light'
      | '_dark'
      | '_web'
      | '_android'
      | '_ios'
      | '_important'
    >,
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
      | '_important'
    >,
    PlatformProps<IIconButtonProps> {
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType;
  /**
   * The variant of the button style to use.
   * @default 'ghost'
   */
  variant?: VariantType<'IconButton'>;
  /**
   * The size of the button.
   */
  size?: ThemeComponentSizeType<'IconButton'>;
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
  _icon?: Partial<IIconProps>;
  /**
   *
   */
  _hover?: Omit<Partial<IIconButtonProps>, '_hover'>;
  /**
   *
   */
  _pressed?: Omit<Partial<IIconButtonProps>, '_pressed'>;
  /**
   *
   */
  _focus?: Omit<Partial<IIconButtonProps>, '_focus'>;
}

export type IIconButtonProps = InterfaceIconButtonProps & CustomProps<'Icon'>;
