import type { ITextProps } from '../Text';

export interface IHeadingProps extends ITextProps {
  /**
   * The size of the heading.
   * @default xl
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;
}
