import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.800', 'white')(props),
    fontWeight: 'bold',
  };
};

const sizeArray = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];

function sizes(props: Record<string, any>) {
  const { size } = props;
  if (typeof size === 'number') {
    return { fontSize: size };
  } else if (typeof size === 'string' && !sizeArray.includes(size)) {
    return { fontSize: size };
  } else {
    return {
      '2xl': { fontSize: '4xl' },
      'xl': { fontSize: '3xl' },
      'lg': { fontSize: '2xl' },
      'md': { fontSize: 'xl' },
      'sm': { fontSize: 'md' },
      'xs': { fontSize: 'sm' },
    };
  }
}

const defaultProps = { size: 'xl' };

export default {
  baseStyle,
  sizes,
  defaultProps,
};
