import { mode } from '../tools';

// FormControl
export const FormControl = {};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: {
    mt: '2',
    _text: {
      fontSize: 'xs',
      _light: { color: 'error.600' },
      _dark: { color: 'error.200' },
    },
    _stack: { space: 1, alignItems: 'center' },
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: {
    _text: {
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    astrickColor: 'error.400',
    mb: '2',
    mr: '3',
  },
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: (props: Record<string, any>) => {
    return {
      mt: '2',
      _text: {
        fontSize: 'xs',
        color: mode('muted.500', 'muted.400')(props),
      },
    };
  },
};
