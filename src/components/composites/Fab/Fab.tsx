import React from 'react';
import { Button } from '../../primitives/Button';
import { HStack } from '../../primitives/Stack';
import type { IFabProps } from './types';
import { useThemeProps } from '../../../hooks/useThemeProps';

const Fab = ({ label, icon, ...props }: IFabProps, ref: any) => {
  const themeProps = useThemeProps('FAB', props);
  const { placement, placementProps, ...newProps } = themeProps;

  return (
    <Button {...placementProps[placement]} {...newProps} ref={ref}>
      {icon && label ? (
        <HStack space={1} justifyContent="center" alignItems="center">
          {icon}
          {label}
        </HStack>
      ) : (
        icon ?? label
      )}
    </Button>
  );
};

export default React.memo(React.forwardRef(Fab));
