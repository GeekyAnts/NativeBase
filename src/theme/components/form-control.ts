// FormControl
export const FormControl = {
  baseStyle: {
    width: '100%',
  },
};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: () => {
    return {
      mt: '2',
      _text: {
        fontSize: 'xs',
      },
      _stack: { space: 1, alignItems: 'center' },
      _light: {
        _text: {
          color: 'error.600',
        },
      },
      _dark: {
        _text: {
          color: 'error.500',
        },
      },
    };
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: () => {
    return {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      _text: {
        fontSize: 'sm',
        fontWeight: 'medium',
      },
      my: '1',
      _light: {
        _text: {
          color: 'text.500',
        },
        _astrick: {
          color: 'error.600',
        },
      },
      _dark: {
        _text: {
          color: 'text.400',
        },
        _astrick: {
          color: 'error.500',
        },
      },
    };
  },
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: () => {
    return {
      mt: '2',
      _text: {
        fontSize: 'xs',
      },
      _light: {
        _text: {
          color: 'text.500',
        },
      },
      _dark: {
        _text: {
          color: 'text.400',
        },
      },
    };
  },
};
