import type { IBoxProps } from '../../primitives/Box';

export interface ITagProps extends IBoxProps<ITagProps> {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
  size?: string | number;
}
