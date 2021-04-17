import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.700', 'white')(props),
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
      '2xl': {
        fontSize: '6xl',
        fontWeight: 'bold',
        letterSpacing: 'xxs',
      },
      'xl': {
        fontSize: '5xl',
        fontWeight: 'bold',
        letterSpacing: 'xs',
      },
      'lg': {
        fontSize: '4xl',
        fontWeight: 'bold',
        letterSpacing: 'sm',
      },
      'md': {
        fontSize: '3xl',
        fontWeight: 'bold',
        letterSpacing: 'xl',
      },
      'sm': {
        fontSize: 'xl',
        fontWeight: 'bold',
        letterSpacing: 'sm',
      },
      'xs': {
        fontSize: 'lg',
        fontWeight: 'bold',
        letterSpacing: 'lg',
      },
    };
  }
}

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
