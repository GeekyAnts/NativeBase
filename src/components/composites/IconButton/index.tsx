import React, { forwardRef } from 'react';
import { Button, IButtonProps } from '../../primitives/Button';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export type IIconButtonProps = IButtonProps & {
  icon: JSX.Element;
};

const IconButton = ({ icon, ...props }: IIconButtonProps, ref: any) => {
  const newProps = usePropsResolution('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
      {icon}
    </Button>
  );
};

export default React.memo(forwardRef(IconButton));
