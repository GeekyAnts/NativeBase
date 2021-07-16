import { mode } from '../tools';

// const numberInput = {
//   _stepper: {},
// };

const defaultProps = {
  size: 'sm',
  step: 1,
  min: -Infinity,
  max: Infinity,
  keepWithinRange: true,
  clampValueOnBlur: true,
  focusInputOnChange: true,
  getAriaValueText: true,
};
const sizes = {
  '2xl': {
    _stepper: { _icon: { size: 3 } },
  },
  'xl': {
    _stepper: { _icon: { size: 4 } },
  },
  'lg': {
    _stepper: { _icon: { size: 4 } },
  },
  'md': {
    _stepper: { _icon: { size: 4 } },
  },
  'sm': {
    _stepper: { _icon: { size: 4 } },
  },
  'xs': {
    _stepper: { _icon: { size: 4 } },
  },
};
export default {
  defaultProps,
  sizes,
  // baseStyle: {
  //   _stepper: { _icon: {} },
  // },
};

//Steppers
const stepperbaseStyle = (props: Record<string, any>) => {
  return {
    bg: mode('primary.600', 'primary.200')(props),
    px: '2px',
    py: '2px',
    rounded: 'none',
    variant: 'unstyled',
    _icon: {
      color: mode('gray.50', 'gray.800')(props),
    },
    _active: {},
    _disabled: {
      opacity: 0.5,
    },
  };
};

export const NumberInputStepper = {
  baseStyle: stepperbaseStyle,
};
