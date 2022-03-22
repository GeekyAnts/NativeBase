import { randomColor, getRandomString } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  const { name } = props;
  const bg = name
    ? randomColor({ string: getRandomString(5) + name })
    : 'gray.400';
  return {
    bg,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'full',
    _text: {
      fontWeight: 600,
    },
    _image: {
      borderRadius: 'full',
      alt: '--',
      _alt: {
        fontWeight: 600,
      },
      style: {
        height: '100%',
        width: '100%',
      },
    },
    _light: {
      borderColor: 'gray.800',
    },
    _dark: {
      borderColor: 'white',
    },
  };
};

function getSize(size: any, fontSize: string) {
  return {
    width: size,
    height: size,
    _text: {
      fontSize: fontSize,
    },
  };
}

const sizes = {
  'xs': getSize('6', '2xs'),
  'sm': getSize('8', 'xs'),
  'md': getSize('12', 'md'),
  'lg': getSize('16', 'xl'),
  'xl': getSize('24', '3xl'),
  '2xl': getSize('32', '5xl'),
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
