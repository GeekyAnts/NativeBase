import AvatarDefault from './Avatar';
import AvatarBadge from './Badge';
import AvatarGroup from './Group';
import type { IAvatarComponentType } from './types';

let AvatarTemp: any = AvatarDefault;
AvatarTemp.Badge = AvatarBadge;
AvatarTemp.Group = AvatarGroup;

// To add typings
const Avatar = AvatarTemp as IAvatarComponentType;

export { Avatar };
export type { IAvatarProps, IAvatarBadgeProps } from './types';
