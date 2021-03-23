import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { VStack, Box, Icon } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { INumberInputSteppersProps, INumberInputContext } from './types';
import { NumberInputContext } from './Context';

export const NBStepper = ({ children, ...props }: any) => {
  const {
    style,
    isIncrement,
    disablitityCheck,
    _active,
    _disabled,
    isDisabled,
    accessibilityLabel,
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
      accessibilityLabel={accessibilityLabel}
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
  const {
    numberInputStepper,
    setNumberInputStepper,
  }: INumberInputContext = React.useContext(NumberInputContext);

  React.useEffect(() => {
    !numberInputStepper &&
      setNumberInputStepper(<VStack {...props}>{children}</VStack>);
  }, [numberInputStepper, setNumberInputStepper, props, children]);
  return null;
};

export default React.memo(NumberInputStepper);
