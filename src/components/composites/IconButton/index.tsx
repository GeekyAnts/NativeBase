import React, { forwardRef } from 'react';
import { Button, IButtonProps, HStack } from '../../primitives';
import { usePropsConfig } from '../../../hooks';
import type { TouchableHighlight, TouchableOpacity } from 'react-native';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
  label?: JSX.Element;
};

const IconButton = ({ icon, label, ...props }: IIconButtonProps, ref: any) => {
  const newProps = usePropsConfig('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
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

export default forwardRef<
  TouchableOpacity | TouchableHighlight,
  IIconButtonProps
>(IconButton);
