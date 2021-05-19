import { mode } from '../tools';

// FormControl
export const FormControl = {};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: {
    mt: 2,
    _text: { fontSize: 'xs', color: 'error.400' },
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: {
    _text: {
      fontSize: 'md',
    },
    astrickColor: 'error.400',
    mb: 2,
    mr: 3,
  },
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: (props: Record<string, any>) => {
    return {
      mt: 2,
      _text: {
        fontSize: 'sm',
        color: mode('muted.500', 'muted.400')(props),
      },
    };
  },
};
