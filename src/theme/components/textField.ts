import { mode } from '../tools';

// TextField
export const TextField = {
  baseStyle: (props: Record<string, any>) => {
    return {
      _errorMessageProps: {
        mt: 1,
        fontSize: 'xs',
        color: 'error.400',
      },
      _helperTextProps: {
        mt: 1,
        fontSize: 'xs',
        color: mode('muted.400', 'muted.500')(props),
      },
    };
  },
  defaultProps: {},
};
