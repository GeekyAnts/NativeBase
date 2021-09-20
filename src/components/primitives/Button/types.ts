import type { ITextProps } from './../Text/types';
import type { IPressableProps } from '../Pressable';
import type { IStackProps } from '../Stack';
import type { ResponsiveValue } from '../../types';
import type { MutableRefObject } from 'react';

import type { ISizes } from '../../../theme/base/sizes';

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
    'ghost' | 'outline' | 'solid' | 'link' | 'unstyled' | 'subtle'
  >;
  /**
   * If true, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * The size of the button.
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
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
  /**
   * Props to be passed to the HStack used inside of Button.
   */
  _stack?: IStackProps;
  /**
   * Prop to decide placement of spinner.
   */
  spinnerPlacement?: 'start' | 'end';
  /**
   * Props to be passed to the button when isLoading is true.
   */
  _loading?: any;
  /**
   * Props to be passed to the button when button is disabled.
   */
  _disabled?: any;
  /**
   * Props to be passed to the spinner when isLoading is true.
   */
  _spinner?: any;
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
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  /**
   * The start icon element to use in the button.
   */

  size?: ResponsiveValue<ISizes | (string & {}) | number>;

  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: string;
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
