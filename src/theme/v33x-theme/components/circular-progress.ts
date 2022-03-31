import { mode, getColorScheme } from '../tools';

const sizes = {
  'xs': {
    height: 6,
    width: 6,
  },
  'sm': {
    height: 8,
    width: 8,
  },
  'md': {
    height: 16,
    width: 16,
  },
  'lg': {
    height: 20,
    width: 20,
  },
  'xl': {
    height: 24,
    width: 24,
  },
  '2xl': {
    height: 32,
    width: 32,
  },
};
const defaultProps = {
  thickness: 8,
  colorScheme: 'primary',
  size: 'lg',
};

function baseStyle(props: Record<string, any>) {
  const colorScheme = getColorScheme(props);
  return {
    color: mode(`${colorScheme}.600`, `${colorScheme}.500`)(props),
    trackColor: mode(`${colorScheme}.200`, `${colorScheme}.800`)(props),
  };
}

export default { baseStyle, sizes, defaultProps };
