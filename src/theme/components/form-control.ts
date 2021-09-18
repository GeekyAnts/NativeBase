import { mode } from '../tools';

// FormControl
export const FormControl = {};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: (props: Record<string, any>) => {
    return {
      mt: '2',
      _text: {
        fontSize: 'xs',
        color: mode('danger.600', 'danger.300')(props),
      },
      _stack: { space: 1, alignItems: 'center' },
    };
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: (props: Record<string, any>) => {
    return {
      _text: {
        fontSize: 'sm',
        fontWeight: 'medium',
      },
      astrickColor: mode('danger.600', 'danger.300')(props),
      mb: '2',
      mr: '3',
    };
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
