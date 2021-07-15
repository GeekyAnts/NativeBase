import React, { memo, forwardRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import { Icon } from '../../primitives/Icon';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IIconButtonProps } from './types';

const IconButton = (
  { icon, children, ...props }: IIconButtonProps,
  ref: any
) => {
  const { _icon, ...resolvedProps } = usePropsResolution('IconButton', props);
  let clonedIcon;
  if (icon) {
    clonedIcon = React.cloneElement(icon, {
      ..._icon,
    });
  }

  return (
    <Pressable ref={ref} {...resolvedProps}>
      {clonedIcon || <Icon {..._icon}>{children}</Icon>}
    </Pressable>
  );
};

export default memo(forwardRef(IconButton));
export type { IIconButtonProps };
