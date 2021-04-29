import React from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarBadgeProps } from './types';

const AvatarBadgeImpl = (props: IAvatarBadgeProps, ref?: any) => {
  const { boxSize, ...newProps } = usePropsResolution('AvatarBadge', props);
  return (
    <Box
      position="absolute"
      right={0}
      bottom={0}
      {...newProps}
      width={boxSize || 3}
      height={boxSize || 3}
      ref={ref}
    />
  );
};
const AvatarBadge = React.memo(React.forwardRef(AvatarBadgeImpl));
AvatarBadge.displayName = 'AvatarBadge';
export default AvatarBadge;
