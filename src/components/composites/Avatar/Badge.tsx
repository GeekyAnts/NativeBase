import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IAvatarBadgeProps } from './props';

const AvatarBadge = (props: IAvatarBadgeProps) => {
  const { boxSize, ...newProps } = useThemeProps('AvatarBadge', props);
  return (
    <Box
      position="absolute"
      right={0}
      bottom={0}
      {...newProps}
      width={boxSize || 3}
      height={boxSize || 3}
    />
  );
};
export default React.memo(AvatarBadge);
