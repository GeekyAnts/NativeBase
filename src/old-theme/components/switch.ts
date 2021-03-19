import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  let { onTrackColor, offTrackColor, onThumbColor, offThumbColor } = props;

  return {
    offTrackColor: offTrackColor ?? mode('gray.100', 'gray.900')(props),
    onTrackColor: onTrackColor ?? mode('green.300', 'green.700')(props),
    onThumbColor: onThumbColor ?? mode('white', 'black')(props),
    offThumbColor: offThumbColor ?? mode('white', 'black')(props),
  };
};

const sizes = {
  sm: {
    transform: [{ scale: 0.75 }],
  },
  md: {},
  lg: {
    transform: [{ scale: 1.25 }],
    margin: 1,
  },
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
