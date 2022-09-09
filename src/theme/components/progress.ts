const defaultProps = {
  colorScheme: 'primary',
  size: 'sm',
  rounded: 'full',
  min: 0,
  max: 100,
  value: 0,
  isIndeterminate: false,
};

function baseStyle(props: Record<string, any>) {
  const { colorScheme: c } = props;

  return {
    overflow: 'hidden',
    _filledTrack: {
      bg: `${c}.600`,
      shadow: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'full',
      _text: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    bg: 'muted.200',
    _dark: {
      bg: 'muted.700',
      _filledTrack: {
        bg: `${c}.400`,
      },
    },
  };
}

const sizes = {
  'xs': {
    height: 1,
  },
  'sm': {
    height: 2,
  },
  'md': {
    height: 3,
  },
  'lg': {
    height: 4,
  },
  'xl': {
    height: 5,
  },
  '2xl': {
    height: 6,
  },
};

export default {
  baseStyle,
  defaultProps,
  sizes,
};
