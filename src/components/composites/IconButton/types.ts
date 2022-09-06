import type { InterfacePressableProps } from '../../primitives/Pressable/types';
import type { IIconProps } from '../../primitives/Icon';
import type { PlatformProps } from '../../../components/types';

import type { CustomProps } from '../../types';
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
