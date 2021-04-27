import type { ITextProps } from './../Text/types';
import type { IPressableProps } from '../Pressable';
import type { IStackProps } from '../Stack';

export type IButtonProps = IPressableProps & {
  colorScheme?: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  isLoading?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  startIcon?: JSX.Element | Array<JSX.Element>;
  endIcon?: JSX.Element | Array<JSX.Element>;
  isLoadingText?: string;
  spinner?: JSX.Element;
  isDisabled?: boolean;
  _text?: ITextProps;
};

export type IButtonGroupProps = IStackProps & {
  direction?: 'column' | 'row';
  children: JSX.Element | Array<JSX.Element>;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme?: string;
  isDisabled?: boolean;
  isAttached?: boolean;
};

export type IButtonComponentType = ((
  props: IButtonProps & { ref?: any }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IButtonGroupProps & { ref?: any }) => JSX.Element
  >;
};
