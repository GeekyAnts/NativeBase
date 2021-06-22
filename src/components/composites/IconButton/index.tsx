import React, { memo, forwardRef } from 'react';
import { Button, IButtonProps } from '../../primitives/Button';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export interface IIconButtonProps extends IButtonProps {
  /**
   * The icon to be used. Refer to the Icon section of the docs for the available icon options.
   */
  icon: JSX.Element;
}

const IconButton = ({ icon, ...props }: IIconButtonProps, ref: any) => {
  const newProps = usePropsResolution('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
      {icon}
    </Button>
  );
};

export default memo(forwardRef(IconButton));
