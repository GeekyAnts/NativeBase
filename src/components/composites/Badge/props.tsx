import type { IBoxProps } from '../../primitives';

export type IBadgeProps = IBoxProps & {
  variant?: 'solid' | 'subtle' | 'outline';
  colorScheme?: string;
};
