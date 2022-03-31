import { mode, getColorScheme } from '../tools';

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
  const colorScheme = getColorScheme(props);

  return {
    bg: `${colorScheme}.200`,
    overflow: 'hidden',
    _filledTrack: {
      bg: mode(`${colorScheme}.600`, `${colorScheme}.500`)(props),
      shadow: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      _text: {
        color: 'white',
        fontWeight: 'bold',
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
