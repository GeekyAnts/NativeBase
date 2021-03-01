import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    opacity: 0.9,
    backgroundColor: mode('gray.200', 'white')(props),
  };
};
const defaultProps = {
  p: 3,
  borderRadius: 'full',
  _title: {
    fontSize: 'md',
    color: 'black',
  },
};

export default {
  baseStyle,
  defaultProps,
};
