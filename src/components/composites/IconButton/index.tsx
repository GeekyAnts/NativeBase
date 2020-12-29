import React, { forwardRef } from 'react';
import type { TouchableHighlight, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { usePropsConfig } from '../../../hooks';
import { Button, HStack, IButtonProps } from '../../primitives';

export type IIconButtonProps = IButtonProps & {
  icon?: JSX.Element;
  label?: JSX.Element;
};

const IconButton = ({ icon, label, ...props }: IIconButtonProps, ref: any) => {
  const newProps = usePropsConfig('IconButton', props);
  return (
    <Button ref={ref} {...newProps}>
      {icon && label ? (
        <HStack
          // NOTE: Don't know why but it works
          pt={Platform.OS === 'ios' ? 2 : undefined}
          space={1}
          justifyContent="center"
          alignItems="center"
        >
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
