import type { IBoxProps } from '../../primitives/Box';

export interface ITagProps extends Omit<IBoxProps, 'size'> {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
  size?: string | number;
}
