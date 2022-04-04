import type { CustomProps, VariantType } from '../../types';
import type { IBoxProps } from '../../primitives';

export interface InterfaceBadgeProps extends IBoxProps<IBadgeProps> {
  /**
   * The style variant of the badge.
   * @default subtle
   */
  variant?: VariantType<'Badge'>;
  /**
   * The color scheme to use for the badge. Must be a key in theme.colors.
   */
  colorScheme?: string;
}

export type IBadgeProps = InterfaceBadgeProps & CustomProps<'Badge'>;
