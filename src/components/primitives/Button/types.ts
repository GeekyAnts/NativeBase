import type { ITextProps } from './../Text/types';
import type { IPressableProps } from '../Pressable';
import type { IStackProps } from '../Stack';
import type { ResponsiveValue } from '../../types';
// Todo: Create underscore Props section on docs.
// _hover?: IButtonProps;
export interface IButtonProps extends IPressableProps {
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: string;
  /**
   * The variant of the button style to use.
   * @default 'solid'
   */
  variant?: ResponsiveValue<
    'ghost' | 'outline' | 'solid' | 'link' | 'unstyled'
  >;
  /**
   * If true, the button will show a spinner.
   */
  isLoading?: any;
  /**
   * The size of the button.
   */
  size?: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg'>;
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
  _text?: ITextProps;
}

export interface IButtonGroupProps extends IStackProps {
  /**
   *
   */
  direction?: 'column' | 'row';
  /**
   *
   */
  children: JSX.Element | Array<JSX.Element>;
  /**
   *
   */
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  /**
   *
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   *
   */
  colorScheme?: string;
  /**
   *
   */
  isDisabled?: boolean;
  /**
   *
   */
  isAttached?: boolean;
}

export type IButtonComponentType = ((
  props: IButtonProps & { ref?: any }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IButtonGroupProps & { ref?: any }) => JSX.Element
  >;
};
