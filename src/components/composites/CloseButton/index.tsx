import React from 'react';
import { default as IconButton } from '../../composites/IconButton';
import Icon from '../../primitives/Icon';
import type { IButtonProps } from '../../primitives/Button/types';

export type ICloseButtonProps = IButtonProps;

const CloseButton = (props: ICloseButtonProps, ref?: any) => {
  const iconSize: any = { xs: 6, sm: 8, md: 10, lg: 12 };
  return (
    <IconButton
      {...props}
      ref={ref}
      icon={
        <Icon name={'close'} size={props.size ? iconSize[props.size] : 8} />
      }
    />
  );
};

export default React.memo(React.forwardRef(CloseButton));
