import type { IBoxProps } from '../../primitives';

export interface IBadgeProps extends IBoxProps {
  /**
   * The style variant of the badge.
   * @default subtle
   */
  variant?: 'solid' | 'subtle' | 'outline';
  /**
   * The color scheme to use for the badge. Must be a key in theme.colors.
   */
  colorScheme?: string;
}
