import Avatar from './Avatar';
import AvatarBadge from './Badge';
import AvatarGroup from './Group';
export type { IAvatarProps, IAvatarBadgeProps } from './types';

// @ts-ignore
Avatar.Badge = AvatarBadge;
// @ts-ignore
Avatar.Group = AvatarGroup;

export { Avatar };
