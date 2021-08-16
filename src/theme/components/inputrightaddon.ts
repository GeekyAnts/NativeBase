import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    borderLeftWidth: 0,
    roundedRight: 4,
    bg: mode('gray.50', 'gray.700')(props),
    p: 3,
    borderColor: mode('gray.300', 'gray.600')(props),
    borderWidth: 1,
  };
};

export default { baseStyle };
