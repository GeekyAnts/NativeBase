import { mode, getColorScheme } from '../tools';

const defaultProps = {
  colorScheme: 'default',
  size: 'md',
  rounded: 50,
};

function baseStyle(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    innerBg: mode(`${colorScheme}.700`, `${colorScheme}.500`)(props),
    bg: mode('blueGray.200', 'blueGray.600')(props),
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
