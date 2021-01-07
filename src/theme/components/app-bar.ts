import { mode, getColorScheme } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.300`)(props),
    color: mode('gray.800', 'gray.50')(props),
    px: 2,
    height: '56px',
  };
};
const defaultProps = {};

export default {
  baseStyle,
  defaultProps,
};
