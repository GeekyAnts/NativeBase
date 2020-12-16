import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode('gray.200', 'whiteAlpha.200')(props),
    borderColor: mode('gray.300', 'whiteAlpha.300')(props),
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 'md',
    fontSize: 'sm',
    fontWeight: 'bold',
    px: 2,
  };
}

const defaultProps = {
  shadow: 1,
};
export default {
  baseStyle,
  defaultProps,
};
