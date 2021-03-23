import type { ITextProps } from '../Text';

type sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];
export type IHeadingProps = ITextProps & {
  size?: sizes | number | string;
};
