import { mode } from '../tools';

const defaultProps = {
  size: 'sm',
  step: 1,
  min: -Infinity,
  max: Infinity,
  defaultValue: '0',
  keepWithinRange: true,
  clampValueOnBlur: true,
  focusInputOnChange: true,
  getAriaValueText: true,
};

export default {
  defaultProps,
};

//Steppers
const stepperbaseStyle = (props: Record<string, any>) => {
  return {
    bg: 'transparent',
    iconColor: mode('gray.600', 'gray.200')(props),
    _active: {},
    _disabled: {
      iconColor: mode('gray.500', 'gray.300')(props),
      bg: mode('blackAlpha.200', 'whiteAlpha.300')(props),
    },
  };
};

export const NumberInputStepper = {
  baseStyle: stepperbaseStyle,
};
