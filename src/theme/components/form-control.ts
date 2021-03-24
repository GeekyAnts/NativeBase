import { mode } from '../tools';

// FormControl
export const FormControl = {};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: {
    _text: { fontSize: 'xs', color: 'error.400' },
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: {
    _text: { fontSize: 'md' },
    astrickColor: 'error.400',
  },
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: (props: Record<string, any>) => {
    return {
      _text: {
        fontSize: 'xs',
        color: mode('muted.400', 'muted.500')(props),
      },
    };
  },
};
