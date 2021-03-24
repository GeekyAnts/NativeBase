import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    opacity: 0.9,
    backgroundColor: mode('gray.800', 'gray.100')(props),
    _title: {
      fontSize: 'md',
      fontWeight: 400,
      color: mode('white', 'gray.900')(props),
    },
  };
};
const defaultProps = {
  py: 3,
  px: 4,
  rounded: 2,
  shadow: 2,
};

export default {
  baseStyle,
  defaultProps,
};
