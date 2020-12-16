import { mode, getColorScheme } from '../tools';

const defaultProps = {
  colorScheme: 'default',
  size: 'md',
};

function baseStyle(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    innerBg: mode(`${colorScheme}.300`, `${colorScheme}.500`)(props),
    bg: mode('gray.200', 'gray.600')(props),
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
