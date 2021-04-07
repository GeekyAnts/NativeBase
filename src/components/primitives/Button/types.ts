import type { ITextProps } from './../Text/types';
import type { IPressableProps } from '../Pressable';

export type IButtonProps = IPressableProps & {
  colorScheme?: string;
  variant?: string;
  isLoading?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  startIcon?: JSX.Element | Array<JSX.Element>;
  endIcon?: JSX.Element | Array<JSX.Element>;
  isLoadingText?: string;
  spinner?: JSX.Element;
  isDisabled?: boolean;
  _text?: ITextProps;
};

export type IButtonGroupProps = {
  children: JSX.Element | Array<JSX.Element>;
  variant?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  spacing?: string | number;
};
