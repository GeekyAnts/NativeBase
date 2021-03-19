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
    fontSize: fontSize,
  };
}

const sizes = {
  '2xs': getSize('4', 'xs'),
  'xs': getSize('6', 'sm'),
  'sm': getSize('8', 'md'),
  'md': getSize('12', 'lg'),
  'lg': getSize('16', 'xl'),
  'xl': getSize('24', '2xl'),
  '2xl': getSize('32', '3xl'),
  'full': getSize('100%', '4xl'),
};

const defaultProps = {
  size: 'md',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
