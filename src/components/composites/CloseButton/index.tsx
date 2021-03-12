import React from 'react';
import { default as IconButton } from '../../composites/IconButton';
import Icon from '../../primitives/Icon';
import type { IButtonProps } from '../../primitives/Button/types';

export type ICloseButtonProps = IButtonProps;

const CloseButton = ({ size, ...props }: ICloseButtonProps, ref?: any) => {
  const iconSize: any = { xs: 4, sm: 8, md: 10, lg: 12 };
  return (
    <IconButton
      {...props}
      ref={ref}
      icon={<Icon name={'close'} size={size ? iconSize[size] : 2} />}
    />
  );
};

export default React.memo(React.forwardRef(CloseButton));
