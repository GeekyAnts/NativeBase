import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IAvatarBadgeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AvatarBadge = memo(
  forwardRef((props: IAvatarBadgeProps, ref?: any) => {
    const { boxSize, ...newProps } = usePropsResolution('AvatarBadge', props);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <Box
        // position="absolute"
        // right={0}
        // bottom={0}
        {...newProps}
        width={boxSize || 3}
        height={boxSize || 3}
        ref={ref}
      />
    );
  })
);

AvatarBadge.displayName = 'AvatarBadge';
export default AvatarBadge as (props: IAvatarBadgeProps, ref?: any) => any;
