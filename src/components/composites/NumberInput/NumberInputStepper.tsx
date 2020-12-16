import React from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Box, Icon } from '../../primitives';
import Divider from '../Divider';
import { usePropsConfig } from '../../../hooks';
import type { INumberInputSteppersProps } from './props';

export const NBStepper = ({ children, ...props }: any) => {
  const {
    style,
    isIncrement,
    disablitityCheck,
    _active,
    _disabled,
    isDisabled,
    ariaLabel,
    pressHandler,
    iconColor,
    ...newProps
  } = usePropsConfig('NumberInputStepper', props);
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disablitityCheck || isDisabled}
      onPress={pressHandler}
      accessible
      accessibilityLabel={ariaLabel}
    >
      <Box
        {...newProps}
        {..._active}
        {...(disablitityCheck || isDisabled ? _disabled : {})}
        style={style}
      >
        {children || isIncrement ? (
          <Icon name="arrow-drop-up" type="MaterialIcons" color={iconColor} />
        ) : (
          <Icon name="arrow-drop-down" type="MaterialIcons" color={iconColor} />
        )}
      </Box>
    </TouchableOpacity>
  );
};

const NumberInputStepper = ({
  children,
  ...props
}: INumberInputSteppersProps) => {
  const { iconColor } = usePropsConfig('NumberInputStepper', props);
  return (
    <VStack
      border={1}
      borderColor="transparent"
      borderLeftColor={iconColor}
      divider={<Divider borderColor={iconColor} />}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default NumberInputStepper;
