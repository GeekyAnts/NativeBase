import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode('gray.200', 'gray.700')(props),
    borderColor: mode('gray.300', 'gray.600')(props),
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 'md',
    px: 2,
    _text: {
      fontSize: 'sm',
      fontWeight: 'bold',
    },
  };
}

const defaultProps = {
  shadow: 1,
};
export default {
  baseStyle,
  defaultProps,
};
