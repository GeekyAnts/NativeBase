const baseStyle = (props: Record<string, any>) => {
  const { colorScheme: c } = props;
  return {
    _disabled: {
      opacity: 0.4,
    },
    _invalid: {
      borderWidth: 2,
      borderRadius: 12,
    },
    onThumbColor: 'muted.50',
    offThumbColor: 'muted.50',
    _light: {
      offTrackColor: 'muted.300',
      onTrackColor: `${c}.600`,
      _hover: {
        offTrackColor: 'muted.400',
        onTrackColor: `${c}.700`,
      },
      _invalid: {
        borderColor: 'error.600',
      },
    },
    _dark: {
      offTrackColor: 'muted.700',
      onTrackColor: `${c}.500`,
      _hover: {
        offTrackColor: 'muted.600',
        onTrackColor: `${c}.400`,
      },
      _invalid: {
        borderColor: 'error.500',
      },
    },
  };
};

const sizes = {
  sm: {
    style: {
      transform: [{ scale: 0.75 }],
    },
  },
  md: {},
  lg: {
    style: {
      transform: [{ scale: 1.25 }],
    },
    margin: 1,
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
