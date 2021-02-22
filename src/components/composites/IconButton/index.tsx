import React, { forwardRef } from 'react';
import { useThemeProps } from '../../../hooks';
import Button, { IButtonProps } from '../../primitives/Button';

export type IIconButtonProps = Omit<IButtonProps, '_text'> & {
  icon: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps, ref: any) => {
  const newProps = useThemeProps('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
      {icon}
    </Button>
  );
};

export default React.memo(forwardRef(IconButton));
