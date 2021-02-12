import React from 'react';
import {
  default as IconButton,
  IIconButtonProps,
} from '../../composites/IconButton';
import Icon from '../../primitives/Icon';

export type ICloseButtonProps = Omit<IIconButtonProps, 'icon'>;

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
