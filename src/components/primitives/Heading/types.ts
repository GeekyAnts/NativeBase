import type { ITextProps } from '../Text';

export type IHeadingProps = ITextProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number | string;
};
