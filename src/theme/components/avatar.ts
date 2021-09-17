import { randomColor, getRandomString, mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  const { name, ...colorModeProps } = props;
  const bg = name
    ? randomColor({ string: getRandomString(5) + name })
    : 'gray.400';
  const borderColor = mode('gray.800', 'white')(colorModeProps);
  return {
    bg,
    borderColor,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'full',
    _text: {
      fontWeight: 600,
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
