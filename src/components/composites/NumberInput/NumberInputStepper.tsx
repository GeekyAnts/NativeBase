import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { VStack, Box, Icon } from '../../primitives';
import { useThemeProps } from '../../../hooks';
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
  } = useThemeProps('NumberInputStepper', props);
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
        borderColor="transparent"
        style={style}
        opacity={disablitityCheck || isDisabled ? 0.4 : 1}
        {...(Platform.OS === 'web'
          ? {
              disabled: disablitityCheck || isDisabled,
              cursor: disablitityCheck || isDisabled ? 'not-allowed' : 'auto',
            }
          : {})}
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
  return <VStack {...props}>{children}</VStack>;
};

export default React.memo(NumberInputStepper);
