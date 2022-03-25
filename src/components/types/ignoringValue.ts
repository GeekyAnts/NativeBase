import type { typography } from '../../theme/styled-system';
type keysOf<T> = keyof T;

export type typographyStyledProps = keysOf<typeof typography> | 'color';
