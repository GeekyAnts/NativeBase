import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { VStack, Box } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { INumberInputSteppersProps, INumberInputContext } from './types';
import { NumberInputContext } from './Context';
import { ChevronUpIcon, ChevronDownIcon } from '../../primitives/Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export const NBStepper = React.forwardRef(
  ({ children, ...props }: any, ref?: any) => {
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
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <TouchableOpacity
        activeOpacity={0.2}
        disabled={disablitityCheck || isDisabled}
        onPress={pressHandler}
        accessible
        accessibilityLabel={accessibilityLabel}
        ref={ref}
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
            <ChevronUpIcon color={iconColor} />
          ) : (
            <ChevronDownIcon color={iconColor} />
          )}
        </Box>
      </TouchableOpacity>
    );
  }
);

const NumberInputStepper = (
  { children, ...props }: INumberInputSteppersProps,
  ref?: any
) => {
  const {
    numberInputStepper,
    setNumberInputStepper,
  }: INumberInputContext = React.useContext(NumberInputContext);

  React.useEffect(() => {
    !numberInputStepper &&
      setNumberInputStepper(
        <VStack {...props} ref={ref}>
          {children}
        </VStack>
      );
  }, [numberInputStepper, setNumberInputStepper, props, children, ref]);
  return null;
};

export default React.memo(React.forwardRef(NumberInputStepper));
