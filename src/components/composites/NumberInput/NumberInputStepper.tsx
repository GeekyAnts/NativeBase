import React from 'react';
import { Platform } from 'react-native';
import { VStack } from '../../primitives';
import type { INumberInputSteppersProps, INumberInputContext } from './types';
import { NumberInputContext } from './Context';
import { TriangleDownIcon, TriangleUpIcon } from '../../primitives/Icon/Icons';
import { IconButton } from '../../composites';
import { usePropsResolution } from '../../../hooks/useThemeProps';

export const NBStepper = React.forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const {
      _stepper: { _icon: c_icon, ..._stepper },
    }: INumberInputContext = React.useContext(NumberInputContext);
    const {
      style,
      isIncrement,
      disablitityCheck,
      _active,
      _disabled,
      isDisabled,
      accessibilityLabel,
      pressHandler,
      _icon,
      ...newProps
    } = usePropsResolution('NumberInputStepper', props);
    return (
      <IconButton
        ref={ref}
        {...newProps}
        {..._active}
        {...(disablitityCheck || isDisabled ? _disabled : {})}
        opacity={disablitityCheck || isDisabled ? 0.4 : 1}
        style={style}
        {...(Platform.OS === 'web'
          ? {
              disabled: disablitityCheck || isDisabled,
              cursor: disablitityCheck || isDisabled ? 'not-allowed' : 'auto',
            }
          : {})}
        onPress={pressHandler}
        disabled={disablitityCheck || isDisabled}
        accessible
        accessibilityLabel={accessibilityLabel}
        {..._stepper}
        _icon={{ ...c_icon, ..._icon }}
        icon={
          children || isIncrement ? <TriangleUpIcon /> : <TriangleDownIcon />
        }
      ></IconButton>
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
