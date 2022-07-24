import type { ITextProps } from './../Text/types';
import type { IStackProps } from '../Stack';
import type { ResponsiveValue } from '../../types';
import type { MutableRefObject } from 'react';
import type { ISizes } from '../../../theme/base/sizes';
import type {
  ThemeComponentSizeType,
  CustomProps,
  VariantType,
  // VariantType,
  // VariantTypeTest,
} from '../../../components/types/utils';
import type { ISpinnerProps } from '../Spinner/types';
import type { IIconProps } from '../Icon';
import type { InterfacePressableProps } from '../Pressable/types';
import type { ColorSchemeType } from '../../../components/types';

// const myFunction = ({ a, b }) => {
//   return { a: a, b: b };
// };

// type returnType = ReturnType<typeof myFunction>;
// type parameter = Parameters<typeof myFunction>[0];

// type newparameter = keyof parameter;
// const a: parameter =
// type parameter = Para<typeof myFunction>;
// type buttonVariant = VariantTypeTest<'Button'>;
// Todo: Create underscore Props section on docs.
// _hover?: IButtonProps;

export interface InterfaceButtonProps
  extends InterfacePressableProps<IButtonProps> {
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType;
  /**
   * The variant of the button style to use.
   * @default 'solid'
   */
  variant?: VariantType<'Button'>;
  /**
   * If true, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If true, the button will be in hovered state.
   */
  isHovered?: boolean;
  /**
   * If true, the button will be in pressed state.
   */
  isPressed?: boolean;
  /**
   * If true, the button will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the button focus ring will be visible.
   */
  isFocusVisible?: boolean;
  /**
   * The size of the button.
   */
  size?: ThemeComponentSizeType<'Button'>;
  // size?: SizeType;
  /**
   * The start icon element to use in the button.
   */
  startIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The end icon element to use in the button.
   */
  endIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The end icon element to use in the button.
   */
  isLoadingText?: string;
  /**
   * The spinner element to use when isLoading is set to true.
   */
  spinner?: JSX.Element;
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * Props to style the child text
   */
  _text?: Partial<ITextProps>;
  /**
   * Props to be passed to the HStack used inside of Button.
   */
  _stack?: Partial<IStackProps>;
  /**
   * Props to be passed to the Icon used inside of Button.
   */
  _icon?: Partial<IIconProps>;
  /**
   * Prop to decide placement of spinner.
   */
  spinnerPlacement?: 'start' | 'end';
  /**
   * Props to be passed to the button when isLoading is true.
   */
  _loading?: Partial<IButtonProps>;
  /**
   * Props to be passed to the button when button is disabled.
   */
  _disabled?: Partial<IButtonProps>;
  /**
   * Props to be passed to the spinner when isLoading is true.
   */
  _spinner?: Partial<ISpinnerProps>;
  /**
   * Props to be passed to the button when button is hovered.
   */
  _hover?: Partial<IButtonProps>;
  /**
   * Props to be passed to the button when button is pressed.
   */
  _pressed?: Partial<IButtonProps>;
  /**
   * Props to be passed to the button when button is focused.
   */
  _focus?: Partial<IButtonProps>;
  /**
   * The right icon element to use in the button.
   */
  rightIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The left icon element to use in the button.
   */
  leftIcon?: JSX.Element | Array<JSX.Element>;
}

export interface IButtonGroupProps extends IStackProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: 'column' | 'row';
  /**
   *
   */
  children: JSX.Element | Array<JSX.Element>;
  /**
   * The variant of the button style to use.
   * @default 'solid'
   */
  variant?: ResponsiveValue<
    'ghost' | 'outline' | 'solid' | 'link' | 'unstyled' | 'subtle'
  >;
  /**
   * The start icon element to use in the button.
   */

  size?: ResponsiveValue<ISizes | (string & {}) | number>;

  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType;
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, button will be atttached together.
   */
  isAttached?: boolean;
}

export type IButtonComponentType = ((
  props: IButtonProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IButtonGroupProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

export type IButtonProps = InterfaceButtonProps & CustomProps<'Button'>;
