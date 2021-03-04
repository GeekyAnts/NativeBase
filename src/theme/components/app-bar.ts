import { mode, getColorScheme } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.300`)(props),
    px: 2,
    minHeight: 16,
  };
};
const defaultProps = {};

export default {
  baseStyle,
  defaultProps,
};
