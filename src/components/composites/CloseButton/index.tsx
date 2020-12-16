import React from 'react';
import Icon from '../../primitives/Icon';
import {
  default as IconButton,
  IIconButtonProps,
} from '../../composites/IconButton';

export type ICloseButtonProps = IIconButtonProps;

const CloseButton = (props: ICloseButtonProps) => {
  return (
    <IconButton {...props} icon={<Icon name={'close'} size={props.size} />} />
  );
};

export default CloseButton;
