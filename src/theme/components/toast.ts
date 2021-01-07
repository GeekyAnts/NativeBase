import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    opacity: 0.9,
    backgroundColor: mode('gray.200', 'white')(props),
    fontSize: 'md',
    color: 'black',
  };
};
const defaultProps = {
  p: 3,
  borderRadius: 'full',
};

export default {
  baseStyle,
  defaultProps,
};
