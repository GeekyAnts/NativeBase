import Avatar from './Avatar';
import AvatarBadge from './Badge';
import AvatarGroup from './Group';
export type { IAvatarProps, IAvatarBadgeProps } from './types';

Avatar.Badge = AvatarBadge;
Avatar.Group = AvatarGroup;

export { Avatar };
