import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarBadgeProps } from './types';

const AvatarBadge = forwardRef((props: IAvatarBadgeProps, ref?: any) => {
  const resolvedProps = usePropsResolution('AvatarBadge', props);

  return <Box {...resolvedProps} ref={ref} />;
});

AvatarBadge.displayName = 'AvatarBadge';
export default memo(AvatarBadge) as (
  props: IAvatarBadgeProps,
  ref?: any
) => any;
